import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const MoviesPage = () => {
  // useEffect(() => {
  //   //http запит
  // }, []);

  return (
    <>
      <div>
        {['movie-1', 'movie-2', 'movie-3'].map(movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {movie}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default MoviesPage;
