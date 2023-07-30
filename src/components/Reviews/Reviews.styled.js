import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
`;

export const Item = styled.li`
  &:nth-child(2n) {
    color: #c49dbf;
  }
`;
