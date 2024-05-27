import React from 'react';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
  font-size: 1.5rem;
  margin: 1rem auto;
  padding: 1rem;
  border-left: 5px solid #ccc;
`;

const Quote = ({ text }) => {
  return <Blockquote>{text}</Blockquote>;
};

export default Quote;
