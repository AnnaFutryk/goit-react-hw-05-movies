import PropTypes from 'prop-types';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { List, Title, Link } from './HomePage.styled';

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
      <Title>Trending today</Title>
      <List $movies={movies}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {poster_path ? (
                <img
                  width="190px"
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
              ) : (
                <div>No poster available</div>
              )}
              {title}
            </Link>
          </li>
        ))}
      </List>
      {loading && <Loader />}
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default HomePage;
