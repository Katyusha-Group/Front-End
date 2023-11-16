import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Login from '../../views/Login.jsx';
const RequireAuth = ({ children }) => {
    const userIsLogged = !!localStorage.getItem('authTokens'); 
    if (!userIsLogged) {
       return <Login />;
    }
    return children;
 };

export default RequireAuth;
