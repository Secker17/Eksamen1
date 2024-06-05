import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5; /* Lys grå bakgrunn */
  color: #333; /* Mørk tekst */
  border-radius: 8px;
`;

const Quote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: #333; /* Mørk tekst */
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const EditButton = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  color: #ff0000;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const UserPage = () => {
  const { username } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserQuotes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://10.12.12.96:6001/api/quotes/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuotes(response.data);
      } catch (err) {
        setError('Error fetching quotes');
      }
    };

    if (username) {
      fetchUserQuotes();
    } else {
      setError('No username provided');
    }
  }, [username]);

  const deleteQuote = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://10.12.12.96:6001/api/quotes${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(quotes.filter(quote => quote._id !== id));
    } catch (err) {
      setError('Error deleting quote');
    }
  };

  return (
    <Container>
      <h1>Quotes by {username}</h1>
      {error && <p>{error}</p>}
      {quotes.map((quote) => (
        <Quote key={quote._id}>
          {quote.text}
          <div>
            <EditButton to={`/edit-quote/${quote._id}`}>Edit</EditButton>
            <DeleteButton onClick={() => deleteQuote(quote._id)}>Delete</DeleteButton>
          </div>
        </Quote>
      ))}
    </Container>
  );
};

export default UserPage;
