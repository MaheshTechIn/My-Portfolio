import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';
import './App.css';

export default function App() {
  return (
      <div className="app-container">

        {/* Navigation Sticky at top */}
        <nav className="navBar">

          <NavLink to="/" className='nav-link'>Home</NavLink>
          <NavLink to="/projects" className='nav-link'>Projects</NavLink>
          <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        </nav>

        {/* Content below navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div> 
  );
}
