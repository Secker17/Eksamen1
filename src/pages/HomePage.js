import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f6d365, #fda085);
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #fda085;
    border-color: #fda085;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
`;

const PostItem = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const PostText = styled.p`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const PostAuthor = styled.span`
  font-size: 1rem;
  color: #555;
  align-self: flex-end;
`;

const LoadMoreButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-top: 100px;

  &:hover {
    background-color: #f6d365;
  }
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get('http://10.12.12.96:6001/api/quotes/all', config);
        setPosts(response.data);
      } catch (err) {
        setError('Unable to show posts, please log inn.');
      }
    };

    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  return (
    <Container>
      <Title>Welcome to !Honest</Title>
      <Subtitle>Your place to find and share your favorite posts.</Subtitle>
      <ButtonContainer>
        <Button to="/write-post">Write a Post</Button>
        <Button to={`/user/${localStorage.getItem('username')}`}>!Honest</Button>
      </ButtonContainer>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <PostList>
        {posts.slice(0, visiblePosts).map((post) => (
          <PostItem key={post._id}>
            <PostText>"{post.text}"</PostText>
            <PostAuthor>- {post.username}</PostAuthor>
          </PostItem>
        ))}
      </PostList>
      {visiblePosts < posts.length && (
        <LoadMoreButton onClick={loadMorePosts}>...</LoadMoreButton>
      )}
    </Container>
  );
};

export default HomePage;
