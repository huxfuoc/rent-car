import React, { Children } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'src/layout/Login';
import Layout from 'src/layout/Layout';
import { appRoutes } from 'src/routing/Routes'
import ProtectedRoute from './ProtectedRoute';

const getRoutes = (routes) => {
    return (
        <>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.layout + route.path}
                    element={<route.component />}
                />
            ))}
        </>
    );
};

const AppRouter = () => {
    return (
        <Routes>
            {getRoutes(appRoutes)}
        </Routes>
    );
};

const token = localStorage.getItem('token');

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute token={token} />}>
                    <Route path='/' element={<Layout />} >
                        {getRoutes(appRoutes)}
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export { MainRouter, AppRouter };