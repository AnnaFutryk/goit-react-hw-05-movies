// import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  // useEffect(() => {
  //   //http запит
  // }, []);

  return (
    <>
      <div>Reviews: {movieId}</div>
    </>
  );
};
export default Reviews;
