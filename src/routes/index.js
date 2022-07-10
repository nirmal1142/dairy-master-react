import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/pages/header';
import { isLoggedIn } from '../helpers/utils/auth.util';
import Dashboard from './dashboard';
import HomePages from './homePage';
import Login from './login';
import Product from './product';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<HomePages />}/> */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/products" element={<Product />} />
            </Routes>
        </Router>
    );
}



// function RouteWrapper({ element: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => (
//                 isLoggedIn() === true ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to="/login" />
//                 )
//             )}
//         />
//     );
// }

// function RouteWrapper({ element: Component, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => (
//                 <Component {...props} />
//             )}
//         />
//     );
// }
