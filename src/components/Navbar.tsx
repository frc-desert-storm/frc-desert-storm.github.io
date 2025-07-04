import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu after clicking any link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            {/* Link to home without hash */}
            <Link to="/" onClick={handleLinkClick}>Desert Storm</Link>
          </div>
          <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/#home" onClick={handleLinkClick} className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#about" onClick={handleLinkClick} className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#team" onClick={handleLinkClick} className="navbar-link">Team</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#robots" onClick={handleLinkClick} className="navbar-link">Robots</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#contact" onClick={handleLinkClick} className="navbar-link">Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/sponsors" onClick={handleLinkClick} className="navbar-link">Sponsors</Link>
            </li>
            <li className="navbar-item">
              <Link to="/donate" onClick={handleLinkClick} className="navbar-link">Donate</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
