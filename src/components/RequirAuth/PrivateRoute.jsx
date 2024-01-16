import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Login from '../../views/Login.jsx';
import NewLandingpage from '../../views/NewLandingPage.jsx';
const RequireAuth = ({ children }) => {
    const nav = useNavigate();   
    const userIsLogged = !!localStorage.getItem('authTokens'); 
    if (!userIsLogged) {
      return <NewLandingpage />;
    }
    return children;
 };

export default RequireAuth;
