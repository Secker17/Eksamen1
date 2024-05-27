import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Quote from '../components/Quote';

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const HomePage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get('/api/quotes/random');
      setQuote(res.data.quote);
    };
    fetchQuote();
  }, []);

  return (
    <Container>
      <h1>Random Quote</h1>
      <Quote text={quote} />
    </Container>
  );
};

export default HomePage;
