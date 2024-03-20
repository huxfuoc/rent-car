import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ token }) => {

    const isAuthenticated = token !== undefined && token !== null;

    return isAuthenticated ? (
        < Outlet />
    ) : (
        <Navigate to='/login' />
    );
};

export default ProtectedRoute;