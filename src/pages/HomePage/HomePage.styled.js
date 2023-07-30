import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 90px;
  text-align: center;
  font-size: 46px;
`;

export const List = styled.ul`
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

export const Link = styled(NavLink)`
  width: 200px;
  height: 342px;
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

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
