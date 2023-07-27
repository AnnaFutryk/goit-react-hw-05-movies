// import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   //http запит
  // }, []);

  return (
    <>
      <div>Cast: {movieId}</div>
    </>
  );
};
export default Cast;
