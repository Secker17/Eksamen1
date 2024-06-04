import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5; /* Light grey background */
  color: #333; /* Dark text */
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid #ccc; /* Light grey border */
  border-radius: 4px;
  background-color: white; /* White background */
  color: #333; /* Dark text */
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff; /* Blue background */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const WriteQuotePage = () => {
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      await axios.post('http://localhost:5000/api/quotes', { text: quote, username }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate(`/user/${username}`);
    } catch (err) {
      console.error('Error saving quote', err);
    }
  };

  return (
    <Container>
      <h1>Write a New Quote</h1>
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here..."
          required
        />
        <Button type="submit">Save Quote</Button>
      </Form>
    </Container>
  );
};

export default WriteQuotePage;
