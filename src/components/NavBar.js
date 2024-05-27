import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/">Quotes</StyledLink>
      <StyledLink to="/sign-in">Sign In</StyledLink>
      <StyledLink to="/sign-up">Sign Up</StyledLink>
    </Nav>
  );
};

export default NavBar;
