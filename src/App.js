import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserPage from './pages/UserPage';
import WriteQuotePage from './pages/WriteQuotePage';
import EditQuotePage from './pages/EditQuotePage';
import Header from './components/Header';
import UserGuide from './pages/UserGuide';

export const AuthContext = createContext();

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const logout = () => {
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/user/:username"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/write-quote"
            element={
              <PrivateRoute>
                <WriteQuotePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-quote/:id"
            element={
              <PrivateRoute>
                <EditQuotePage />
              </PrivateRoute>
            }
          />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
