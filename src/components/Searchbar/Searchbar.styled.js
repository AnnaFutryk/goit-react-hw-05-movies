import styled from 'styled-components';

export const SearchForm = styled.form`
  @media screen and (max-width: 475.99px) {
    display: flex;
    flex-direction: column;
  }
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  padding: 10px;
  border-radius: 16px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #5f116f;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #c49dbf;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #c49dbf, 0 -3px 4px #ffffff;
  }
`;

export const Input = styled.input`
  @media screen and (max-width: 767.99px) {
    width: 260px;
  }
  width: 400px;
  height: 26px;
  padding: 4px;
  text-align: center;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0 6px 8px #c49dbf, 0 -2px 1px #e4d5e3;
  color: #5f116f;
  &::placeholder {
    padding: 4px;
    font-size: 16px;
    color: #cccccc;
  }
`;
