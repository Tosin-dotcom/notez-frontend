import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';


const HomeRoutes = () => (

    <Routes>
        <Route path="/" Component={HomePage} />
    </Routes>

)

export default HomeRoutes;
