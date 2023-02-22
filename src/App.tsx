import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { ThemeContext, Theme } from '../src/context/ThemeContext';

import Login from './pages/Login';
import VerifyOTP from './pages/VetfiyOTP';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Greeting from './pages/greeting';
import Error404 from './pages/Error404';
function App() {
  const [theme, setTheme] = React.useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ChakraProvider>
    </ThemeContext.Provider>
  );
}

export default App;
