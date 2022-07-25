import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/pages/header';
import Dashboard from './dashboard';
import Login from './login';
import Product from './product';
import { RatePage } from './rate';

export default function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />

                {/* Protected Routing */}
                <Route element={<Layout />} >
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/products" element={<Product />} />
                    <Route exact path="/rate" element={<RatePage />} />

                </Route>
            </Routes>
        </Router >
    );
}

