import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MovieDetails from './MovieDetails/MovieDetails';
import HomePage from './page/HomePage';
import MoviesPage from './page/MoviesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
