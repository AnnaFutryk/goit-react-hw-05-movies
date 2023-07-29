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
    const TrendingMovies = () => {
      setLoading(true);

      fetchTrendingMovies()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    TrendingMovies();
  }, []);

  return (
    <>
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
