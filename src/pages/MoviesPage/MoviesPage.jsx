import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';

const MoviesPage = () => {
  const [movies, setMovies] = useState(['movie-1', 'movie-2', 'movie-3']);

  //отримуємо обʼєкт місця положення
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? ''; // читаємо по імені параметра (знач з інпуту), якщо його нема - ставимо '', щоб при видаленні введених даних зникав = з адресного рядку та знову рендерився увесь список, інакше null

  // useEffect(() => {
  //   //http запит
  // }, []);

  //записуємо зі знач переметру
  const updateQuerystring = e => {
    const movieIdValue = e.target.value;
    //якщо в інпуті e.target.value '', то передаємо порожній {}
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    //якщо в інпуті movieIdValue НЕ '', то передаємо значення інпуту
    setSearchParams({ movieId: movieIdValue });
  };

  const filteredMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <>
      <div>
        <input type="text" value={movieId} onChange={updateQuerystring} />
        <button type="submit" onClick={() => setSearchParams()}>
          Search
        </button>
        <ul>
          {filteredMovies.map(movie => {
            return (
              <li key={movie}>
                <Link to={`${movie}`} state={{ from: location }}>
                  {movie}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default MoviesPage;
