import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customer';
import Categories from '../pages/Categories';
import CarManager from '../pages/CarManager';
import OrderHistory from '../pages/OrderHistory';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/manager" element={<CarManager />} />
            <Route path="/history" element={<OrderHistory />} />
        </Routes>
    )
}

export default Router
