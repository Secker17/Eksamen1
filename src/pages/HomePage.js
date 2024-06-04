import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f6d365, #fda085);
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: #fda085;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to !Honest</Title>
      <Subtitle>Your place to find and share your favorite quotes.</Subtitle>
      <ButtonContainer>
        <Button to="/signup">Sign Up</Button>
        <Button to="/login">Login</Button>
        <Button to="/write-quote">Write a Quote</Button>
        <Button to={`/user/${localStorage.getItem('username')}`}>!Honest</Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;