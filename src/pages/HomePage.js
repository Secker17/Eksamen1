import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5; /* Lys grå bakgrunn */
  color: #333; /* Mørk tekst for bedre kontrast */
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff; /* Blå bakgrunn */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Mørkere blå ved hover */
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to the Quotes App</Title>
      <p>Your place to find and share your favorite quotes.</p>
      <ButtonContainer>
        <Button to="/signup">Sign Up</Button>
        <Button to="/login">Login</Button>
        <Button to="/write-quote">Write a Quote</Button>
        <Button to={`/user/${localStorage.getItem('username')}`}>My Quotes</Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
