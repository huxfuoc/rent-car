import React, { Children } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../layout/Layout';
import { appRoutes } from '../routing/Routes'

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

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/' element={<Layout />} >
                    {getRoutes(appRoutes)}
                </Route>
            </Routes>
        </Router>
    );
};

export { MainRouter, AppRouter };
