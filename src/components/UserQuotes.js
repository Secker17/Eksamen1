import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #f6d365, #fda085);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const QuoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuoteItem = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const QuoteAuthor = styled.span`
  font-size: 1rem;
  color: #555;
  align-self: flex-end;
`;

const Button = styled.button`
  background: #fda085;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f77c40;
  }
`;

const UserQuotes = () => {
  const { username } = useParams();
  const [quotes, setQuotes] = useState([]);
  const loggedInUser = localStorage.getItem('username');

  useEffect(() => {
    const fetchQuotes = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(`http://localhost:6001/api/quotes/${username}`, config);
      setQuotes(response.data);
    };

    fetchQuotes();
  }, [username]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(`http://localhost:6001/api/quotes/${id}`, config);
    setQuotes(quotes.filter((quote) => quote._id !== id));
  };

  return (
    <Container>
      <Title>Quotes by {username}</Title>
      <QuoteList>
        {quotes.map((quote) => (
          <QuoteItem key={quote._id}>
            <QuoteText>"{quote.text}"</QuoteText>
            <QuoteAuthor>- {quote.username}</QuoteAuthor>
            {quote.username === loggedInUser && (
              <>
                <Button onClick={() => handleDelete(quote._id)}>Delete</Button>
                {/* Add a link to the edit page here if you have one */}
              </>
            )}
          </QuoteItem>
        ))}
      </QuoteList>
    </Container>
  );
};

export default UserQuotes;
