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
                        <h2 className="sponsors-title sponsors-title-platinum">Platinum</h2>
                        <div className="platinum-sponsors">
                            <div className="platinum-sponsor sponsor">
                                <a href="https://skunkcreekarms.com/">
                                    <img src="/Sponsors/Skunk%20Creek%20Arms.png" alt="Platinum" className="sponsor-image"/>
                                </a>
                            </div>
                            <div className="platinum-sponsor sponsor">
                                <a href="https://sites.google.com/view/launchteamrobotics">
                                    <img src="/Sponsors/Launch.png" alt="Platinum" className="sponsor-image" />
                                </a>
                            </div>
                        </div>
                        <h2 className="sponsors-title sponsors-title-gold">Gold</h2>
                        <div className="gold-sponsors">

                        </div>
                        <h2 className="sponsors-title sponsors-title-silver">Silver</h2>
                        <div className="silver-sponsors">

                        </div>
                        <h2 className="sponsors-title sponsors-title-bronze">Bronze</h2>
                        <div className="bronze-sponsors">

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
