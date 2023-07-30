import PropTypes from 'prop-types';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { Img, List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoading(true);
      try {
        const actors = await fetchCast(movieId);
        setActors(actors);
      } catch {
        toast.error('Ooops...Something went wrong', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }); //повідомлення у разі помилки
      } finally {
        setLoading(false);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      <ToastContainer transition={Slide} />
      {loading && <Loader />}
      <List>
        {actors.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <Img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://www.bilo-teploservice.info-gkh.com.ua/assets/images/noimage.png`
              }
              alt={name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.number.isRequired,
    })
  ),
};
export default Cast;
