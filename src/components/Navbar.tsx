import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Desert Storm</a>
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }} className="navbar-link">Team</a>
          </li>
          <li className="navbar-item">
            <a href="#robots" onClick={(e) => { e.preventDefault(); scrollToSection('robots'); }} className="navbar-link">Robots</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
