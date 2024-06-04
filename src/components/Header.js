import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo1 from '../media/Logo11.png';

const HeaderContainer = styled.header`
  background-color: #222;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: relative;
`;

const Logo = styled.img`
  height: 140px; /* Adjust the size as needed */
`;

const SiteName = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem; /* Adjust the font size as needed */
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: #fff;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: #fff;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo src={Logo1} alt="App Logo" />
      <SiteName>!Honest</SiteName>
      <Nav>
        {isLoggedIn ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/user/${username}`}>My Quotes</NavLink>
            <NavLink to="/write-quote">Write a Quote</NavLink>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
