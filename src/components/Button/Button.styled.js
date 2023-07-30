import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: inline-block;
  margin-left: 50%;
  margin-bottom: 28px;
  transform: translateX(-50%);
  min-width: 60;
  padding: 14px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #5f116f;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #c49dbf;
  &:hover,
  &:focus {
    position: relative;
    top: 3px;
  }
`;
