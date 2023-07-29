import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies'); //для коректного повернення з вкладеного маршруту (з акторів та відгуків); зберігаємо локейшн з якого прийшли
  const { movieId } = useParams();

  // useEffect(() => {
  //   //http запит
  // }, []);

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {/* якщо з нової вкладки переходимо, то відкриється ст з /movies */}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
