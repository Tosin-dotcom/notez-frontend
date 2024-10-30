import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/user/DashBoardPage';
import ProtectedRoute from '../components/commons/ProtectedRoute';
import CreateNotePage from '../pages/user/CreateNotePage';
import AllNotesPage from '../pages/user/AllNotesPage';
import NoteDetailPage from '../pages/user/NoteDetailPage';
import EditNotePage from '../pages/user/EditNotePage';


const UserRoutes = () => (

  <Routes>
    <Route path="/" element={<ProtectedRoute> <DashBoardPage /> </ProtectedRoute>}/>
    <Route path="/create-note" element={<ProtectedRoute> <CreateNotePage /> </ProtectedRoute>}/>
    <Route path="/notes" element={<ProtectedRoute> <AllNotesPage /> </ProtectedRoute>}/>
    <Route path='/note/:id' element={<ProtectedRoute> <NoteDetailPage /> </ProtectedRoute>}/>
    <Route path='/edit-note/:id' element={<ProtectedRoute> <EditNotePage /> </ProtectedRoute>} />
    
  </Routes>
  
);

export default UserRoutes;
