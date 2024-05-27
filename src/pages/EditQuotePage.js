import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5; /* Lys grå bakgrunn */
  color: #333; /* Mørk tekst */
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
  border: 1px solid #ccc; /* Lys grå kant */
  border-radius: 4px;
  background-color: white; /* Hvit bakgrunn for tekstfelt */
  color: #333; /* Mørk tekst */
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff; /* Blå bakgrunn */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Mørkere blå ved hover */
  }
`;

const EditQuotePage = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/quotes/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuote(response.data.text);
      } catch (err) {
        console.error('Error fetching quote', err);
      }
    };

    fetchQuote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/quotes/${id}`, { text: quote }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate(-1); // Go back to the previous page
    } catch (err) {
      console.error('Error updating quote', err);
    }
  };

  return (
    <Container>
      <h1>Edit Quote</h1>
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
        />
        <Button type="submit">Update Quote</Button>
      </Form>
    </Container>
  );
};

export default EditQuotePage;
