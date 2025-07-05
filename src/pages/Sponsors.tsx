import React from 'react';
import Navbar from '../components/Navbar';
import './Styles/Sponsors.css';

const Sponsors: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1>Coming soon!</h1>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Desert Storm. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Sponsors;
