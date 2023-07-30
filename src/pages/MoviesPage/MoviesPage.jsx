import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovieByWord } from 'services/api';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from 'components/Button/Button';

const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  //отримуємо обʼєкт місця положення
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? ''; // читаємо по імені параметра (знач з інпуту), якщо його нема - ставимо '', щоб при видаленні введених даних зникав = з адресного рядку та знову рендерився увесь список, інакше null

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchMoviesByWord = async () => {
      setLoading(true);
      try {
        const searchResults = await fetchSearchMovieByWord(query, page);

        console.log(searchResults);

        if (searchResults.total_results === 0) {
          toast.warn('No movies', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          return;
        }
        const formatedFilteredMovies = searchResults.results.map(
          ({ id, title }) => ({
            id,
            title,
          })
        );

        setFilteredMovies(prevFilteredMovies => [
          ...prevFilteredMovies,
          ...formatedFilteredMovies,
        ]);

        setIsLoadMoreBtnVisible(page !== searchResults.total_pages);
      } catch {
        toast.error('Ooops...Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }); //повідомлення у разі помилки
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMoviesByWord();
    }
  }, [query, page]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setFilteredMovies([]);
    setPage(1);
  };

  //Завантаження зображень через збільш номеру ст
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {loading && <Loader />}

        <ul>
          {filteredMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} id={id} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        {isLoadMoreBtnVisible && <Button onClick={loadMore} />}
      </div>
    </>
  );
};

export default MoviesPage;
