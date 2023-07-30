import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  AddInfoList,
  BackButton,
  BackLink,
  Container,
  Hr,
  Img,
  LinkInfo,
  List,
  SubTitle,
} from './MovieDetails.styled';

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
      <BackLink to={backLinkLocationRef.current}>
        <BackButton type="button">Go back</BackButton>
      </BackLink>
      {/* якщо з нової вкладки переходимо, то відкриється ст з /movies */}
      {loading && <Loader />}
      {movieInfo && (
        <Container>
          {poster_path ? (
            <Img
              width="300px"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          ) : (
            <div>No poster available</div>
          )}
          <div>
            <h1>{title}</h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </List>
          </div>
        </Container>
      )}
      <Hr />
      <SubTitle>Additinal information</SubTitle>
      <AddInfoList>
        <li>
          <LinkInfo to="cast">Cast</LinkInfo>
        </li>
        <li>
          <LinkInfo to="reviews">Reviews</LinkInfo>
        </li>
      </AddInfoList>
      <Hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
