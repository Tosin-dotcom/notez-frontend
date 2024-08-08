import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/user/DashBoardPage';
import ProtectedRoute from '../components/commons/ProtectedRoute';


const UserRoutes = () => (

  <Routes>
    <Route path="/" element={<ProtectedRoute> <DashBoardPage /> </ProtectedRoute>}/>

  </Routes>
  
);

export default UserRoutes;
