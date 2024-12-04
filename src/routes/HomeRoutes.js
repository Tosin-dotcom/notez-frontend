import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FileUpload from '../components/layout/FileUpload';


const HomeRoutes = () => (

    <Routes>
        <Route path="/" Component={HomePage} />

        <Route path='/playground' Component={FileUpload}/>
    </Routes>

)

export default HomeRoutes;
