import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

import Login from './pages/Login';
import VerifyOTP from './pages/VetfiyOTP';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Greeting from './pages/greeting';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/greeting" element={<Greeting />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
