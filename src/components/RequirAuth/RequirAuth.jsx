import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authTokens'); // Retrieve the token from local storage
    if (!token) {
      navigate("/login") // Redirect to the login page
    }
  }, [history]);

  return <>{children}</>;
};

export default RequireAuth;
