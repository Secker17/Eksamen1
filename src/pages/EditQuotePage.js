import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for styling the page
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

const EditQuotePage = () => {
  const { id } = useParams(); // Get the quote ID from the URL parameters
  const [quote, setQuote] = useState(''); // State to store the quote text
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Function to fetch the existing quote text
    const fetchQuote = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const response = await axios.get(`http://10.12.12.96:6001/api/quotes/${id}`, {
          headers: { Authorization: `Bearer ${token}` }, // Set the authorization header
        });
        setQuote(response.data.text); // Set the fetched quote text to the state
      } catch (err) {
        console.error('Error fetching quote', err); // Log any errors
      }
    };

    fetchQuote(); // Call the fetchQuote function
  }, [id]); // Dependency array, triggers fetchQuote when 'id' changes

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      await axios.put(`http://10.12.12.96:6001/api/quotes/${id}`, { text: quote }, {
        headers: { Authorization: `Bearer ${token}` }, // Set the authorization header
      });
      navigate(-1); // Navigate back to the previous page
    } catch (err) {
      console.error('Error updating quote', err); // Log any errors
    }
  };

  return (
    <Container>
      <h1>Edit Quote</h1>
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={quote} // Set the value of the text area to the quote text
          onChange={(e) => setQuote(e.target.value)} // Update the state when the text area changes
          required
        />
        <Button type="submit">Update Quote</Button>
      </Form>
    </Container>
  );
};

export default EditQuotePage;
