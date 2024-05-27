import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home/:username" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
