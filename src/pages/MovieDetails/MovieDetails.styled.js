import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackButton = styled.button`
  margin-top: 90px;
  margin-bottom: 20px;
  margin-left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 120px;
  padding: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: #5f116f;
  font-size: 18px;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #c49dbf;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #c49dbf, 0 -3px 4px #ffffff;
  }
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  @media screen and (max-width: 767.99px) {
    display: block;
  }
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  gap: 24px;
`;

export const Img = styled.img`
  @media screen and (max-width: 767.99px) {
    width: 250px;
  }
  border-radius: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const SubTitle = styled.h2`
  margin-left: 20px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin-left: 20px;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: white;

  &:hover {
    color: #c49dbf;
  }
`;

export const Hr = styled.hr`
  border-color: #c49dbf;
`;
