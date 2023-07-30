import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 28px;
  margin-top: 56px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  border-radius: 8px;
`;
