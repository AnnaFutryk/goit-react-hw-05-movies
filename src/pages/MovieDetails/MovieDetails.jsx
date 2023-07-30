import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies'); //для коректного повернення з вкладеного маршруту (з акторів та відгуків); зберігаємо локейшн з якого прийшли
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetailsFilms = async () => {
      setLoading(true);
      try {
        const detailsOfMovie = await fetchMovieDetails(movieId);
        setMovieInfo(detailsOfMovie);
      } catch {
        toast.error('Ooops...Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }); //повідомлення у разі помилки
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { title, popularity, overview, genres, poster_path } = movieInfo || {};

  return (
    <>
      <ToastContainer transition={Slide} />
      <Link to={backLinkLocationRef.current}>
        <button type="button">Go back</button>
      </Link>
      {/* якщо з нової вкладки переходимо, то відкриється ст з /movies */}
      {loading && <Loader />}
      {movieInfo && (
        <div>
          {poster_path ? (
            <img
              width="300px"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          ) : (
            <div>No poster available</div>
          )}
          <h1>{title}</h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      )}
      <hr />
      <h2>Additinal information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
