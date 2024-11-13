import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Adjust the path as needed
import Register from './components/Register'; // Assuming you have a Register component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import PhishingDetector from './components/PhishingDetector'; // Import the PhishingDetector component
import AccountDash from './components/AccountDash'; // Import the AccountDash component
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} /> {/* Set the dashboard as the default route */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/detect" element={<PhishingDetector />} /> {/* Add the PhishingDetector route */}
                <Route path="/account-dash" element={<AccountDash />} /> {/* Add the AccountDash route */}
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
