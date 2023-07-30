import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //отримуємо обʼєкт місця положення, щоб при кліку на Go back з інф про акторів-відгуків, було коректне повернення на HomePage
  const location = useLocation();

  useEffect(() => {
    const TrendingMovies = async () => {
      setLoading(true);
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch {
        toast.error('Ooops...Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } finally {
        setLoading(false);
      }
    };
    TrendingMovies();
  }, []);

  return (
    <>
      <ToastContainer transition={Slide} />
      <h1>Trending today</h1>
      <ul movies={movies}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {loading && <Loader />}
    </>
  );
};
export default HomePage;
