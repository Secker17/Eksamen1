import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 8px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const UserGuide = () => {
  return (
    <Container>
      <Title>Welcome to !Honest User Guide</Title>

      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <Paragraph>
          To begin using our application, you need to create an account or log in if you already have one.
          Use the 'Sign Up' link to register a new account and 'Log in' link to access your existing account.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Home Page</SectionTitle>
        <Paragraph>
          Once you are logged in, you will be redirected to the home page. Here you can view a list of quotes 
          from all users. You can also write a new quote or visit your personal quotes page.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>My Quotes</SectionTitle>
        <Paragraph>
          By clicking on 'My Quotes', you can view all the quotes you have written. You can edit or delete 
          any of your quotes by clicking on the respective buttons next to each quote.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Writing a Quote</SectionTitle>
        <Paragraph>
          To write a new quote, click on the 'Write a Quote' link. You will be taken to a page where you can 
          enter your quote and submit it. Your new quote will be added to your personal list of quotes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Editing a Quote</SectionTitle>
        <Paragraph>
          If you want to edit one of your quotes, go to the 'My Quotes' page and click the 'Edit' button next 
          to the quote you want to update. You will be taken to an editing page where you can modify your quote 
          and save the changes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Deleting a Quote</SectionTitle>
        <Paragraph>
          To delete a quote, go to the 'My Quotes' page and click the 'Delete' button next to the quote you 
          want to remove. The quote will be permanently deleted from your list.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Logging Out</SectionTitle>
        <Paragraph>
          You can log out at any time by clicking the 'Logout' button in the header. This will end your session 
          and redirect you to the login page.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Security</SectionTitle>
        <Paragraph>
          Your security is important to us. Make sure to log out after using the application, especially if 
          you are on a shared or public computer. Your data is secured with us and we use industry-standard 
          practices to protect your information.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Need Help?</SectionTitle>
        <Paragraph>
          If you encounter any issues or have any questions, feel free to contact our support team. We are here 
          to help you make the most out of your experience with !Honest.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default UserGuide;
