import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const QuoteList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const QuoteItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const UserPage = () => {
  const { username } = useParams();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchUserQuotes = async () => {
      const res = await axios.get(`/api/quotes/${username}`);
      setQuotes(res.data);
    };
    fetchUserQuotes();
  }, [username]);

  return (
    <Container>
      <h1>{username}'s Quotes</h1>
      <QuoteList>
        {quotes.map((quote) => (
          <QuoteItem key={quote._id}>{quote.text}</QuoteItem>
        ))}
      </QuoteList>
    </Container>
  );
};

export default UserPage;
