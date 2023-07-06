import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Login from '../../views/Login.jsx';
const RequireAuth = ({ children }) => {
    const userIsLogged = !!localStorage.getItem('authTokens'); // Your hook to get login status
    console.log("auth ----------------")
    if (!userIsLogged) {
       return <Login />;
    }
    return children;
 };

export default RequireAuth;
