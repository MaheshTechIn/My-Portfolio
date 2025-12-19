import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';
import './App.css';
import './Styles/Theme.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function App() {
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
      <div className="app-container">

        {/* Navigation Sticky at top */}
        <Navbar /> 
       
        {/* Content below navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
        </div>
          <Footer theme={theme} toggleTheme={toggleTheme} />

      </div> 
  );
}
