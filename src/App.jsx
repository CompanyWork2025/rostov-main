// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar'; // Import Navbar
import Home from './pages/Home';         // Import Home page
import About from './pages/About';       // Import About page
import Services from './pages/Services'; // Import Services page
import Contact from './pages/Contact';   // Import Contact page

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
