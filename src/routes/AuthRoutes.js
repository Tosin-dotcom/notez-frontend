import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'


const AuthRoutes = () => (

  <Routes>
    <Route path="/login" Component={LoginPage} />
    <Route path="/register" Component={RegisterPage} />
  </Routes>
  
);

export default AuthRoutes;
