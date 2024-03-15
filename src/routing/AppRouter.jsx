import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Categories from '../pages/Categories';
import CarManager from '../pages/CarManager';
import OrderHistory from '../pages/OrderHistory';
import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customer';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/app" element={<Dashboard />} />
            <Route path="/app/customer" element={<Customer />} />
            <Route path="/app/categories" element={<Categories />} />
            <Route path="/app/manager" element={<CarManager />} />
            <Route path="/app/history" element={<OrderHistory />} />
        </Routes>
    )
}

export default AppRouter
