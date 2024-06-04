// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  background-color: #007bff; /* Blå bakgrunn */
  padding: 1rem 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1rem;
  transition: color 0.3s;

  &:hover {
    color: #dcdcdc; /* Lysere grå ved hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/write-quote">Write a Quote</NavLink>
        <NavLink to={`/user/${localStorage.getItem('username')}`}>!Honest</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
