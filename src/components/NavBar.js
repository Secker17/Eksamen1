import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Quotes</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
};

export default NavBar;
