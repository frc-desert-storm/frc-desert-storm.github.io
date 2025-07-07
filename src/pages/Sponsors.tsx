import React from 'react';
import Navbar from '../components/Navbar';
import './Styles/Sponsors.css';

const Sponsors: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* Sponsors Section */}
            <section id="Sponsors" className="sponsors-section">
                <div className="section-container">
                    <h2 className="section-title">Sponsors</h2>
                    <div className="sponsors-content">
                        <div className="platinum-sponsors">
                            <h2 className="sponsors-title">Platinum</h2>
                            <div className="platinum-sponsor">
                                <img src="/Sponsors/Skunk%20Creek%20Arms.png" alt="Platinum" className="sponsor-image"/>
                            </div>
                        </div>
                        <div className="gold-sponsors">
                            <h2 className="sponsors-title">Gold</h2>
                        </div>
                        <div className="silver-sponsors">
                            <h2 className="sponsors-title">Silver</h2>
                        </div>
                        <div className="bronze-sponsors">
                            <h2 className="sponsors-title">Bronze</h2>
                        </div>
                    </div>
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
