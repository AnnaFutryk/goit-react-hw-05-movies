import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, SearchButton, SearchForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setSearchText(value); // Оновлюємо searchText при зміні value
  }, [value]);

  const handleChange = e => setValue(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchText.trim()) {
      alert('Fill in the request');
      return;
    }
    setSearchText(searchText.trim()); //отримуємо введений пошуковий запит без лишніх пробілів
    onSubmit(searchText.trim()); //передаємо запит в арр
    setValue(''); // Скидаємо поле вводу після сабміту
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          name="searchText"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
          value={value}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
