import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #21a1f1;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/auth/register', { username, password });
      navigate('/sign-in');
    } catch (err) {
      setError('Error registering user');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <Button type="submit">Sign Up</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

export default SignUp;
