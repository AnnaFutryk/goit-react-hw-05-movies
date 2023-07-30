import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = async () => {
      setLoading(true);
      try {
        const reviews = await fetchReviews(movieId);
        setReviews(reviews);
      } catch {
        toast.error('Ooops...Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }); //повідомлення у разі помилки
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      <ToastContainer transition={Slide} />
      {loading && <Loader />}

      <ul>
        {reviews.length === 0 ? (
          <div>We don't have any reviews for this movie</div>
        ) : (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Reviews;
