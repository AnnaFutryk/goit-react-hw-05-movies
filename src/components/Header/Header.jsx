import { HeaderWrap, Link, List } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </List>
    </HeaderWrap>
  );
};

export default Header;
