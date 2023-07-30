import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FilteredList = styled.ul`
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

export const FilteredItem = styled.li`
  width: 200px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FilteredLink = styled(NavLink)`
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  text-decoration: none;
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3),
      inset 0px -6px 12px rgba(0, 0, 0, 0.6);
  }
`;
