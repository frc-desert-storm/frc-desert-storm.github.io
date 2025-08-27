import React from 'react';
import Navbar from '../components/Navbar';
import './Styles/Donate.css';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

const Donate: React.FC = () => {
    const chartData = [
        {name: 'Tools and material', value: 15000},
        {name: 'Team swag', value: 2000},
        {name: 'Admin costs', value: 500},
        {name: 'Travel/meals', value: 10000},
    ].sort((a, b) => b.value - a.value);

    const COLORS = [
        '#0088FE', // blue
        '#00C49F', // teal
        '#FFBB28', // amber
        '#FF8042', // orange
        '#A28DFF', // lavender
        '#FF6699', // pink
        '#33CC33', // green
        '#FF4444', // red
        '#9966FF', // violet
        '#00BFFF', // deep sky blue
        '#FFCC00', // golden yellow
        '#FF6F61', // coral
        '#6B8E23', // olive green
        '#20B2AA', // light sea green
        '#CD5C5C', // indian red
    ];


    return (
        <>
            <Navbar/>
            {/* Donate Section */}
            <section id="donate" className="donate-section">
                <div className="section-container">
                    <h2 className="section-title donate-title">Donate</h2>
                    <div className="donate-content">
                        <div className="donate-text">
                            <p>Desert Storm Robotics is a student-led FRC team committed to bringing STEM education and
                                competitive robotics to rural Arizona. Your donation helps fund life-changing
                                experiences in engineering, programming, and teamwork.</p>
                        </div>
                        <div className="donate-image">
                            <img src="/donate.png" alt="Donate" className="donate-image"/>
                        </div>
                    </div>
                    {/* Pie Chart Section */}
                    <div className="donate-chart-wrapper">
                        <ResponsiveContainer width="80%" height={400}>
                            <PieChart width={500} height={500}>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    label={({value}) => (value !== undefined ? `$${value.toLocaleString()}` : '')}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey="value"
                                    className={"DonatePie"}
                                >
                                    {chartData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                    ))}
                                </Pie>
                                <Tooltip
                                    wrapperClassName="DonatePieTooltip"
                                    formatter={(value: number, name: string) => [`${name} $${value.toLocaleString()}`]}
                                />
                                <Legend
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                    iconType="square"
                                    itemSorter={(item: any) => -(item.value ?? 0)}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="donation-tiers">
                        <h2 className="section-title donation-tiers-title">Sponsorship Tiers</h2>
                        <ol className="donation-tiers-list">
                            <li className="donation-tier bronze">
                                <h4 className="donation-tier-title">Bronze</h4>
                                <p className="donation-tier-description">$100–$499</p>
                            </li>
                            <li className="donation-tier silver">
                                <h4 className="donation-tier-title">Silver</h4>
                                <p className="donation-tier-description">$500–$999</p>
                            </li>
                            <li className="donation-tier gold">
                                <h4 className="donation-tier-title">Gold</h4>
                                <p className="donation-tier-description">$1000–$1999</p>
                            </li>
                            <li className="donation-tier platinum">
                                <h4 className="donation-tier-title">Platinum</h4>
                                <p className="donation-tier-description">$2000+</p>
                            </li>
                        </ol>
                    </div>

                    {/* PayPal Donation Section */}
                    <section className="donation-section">
                        <div className="section-container">
                            <h2 className="section-title donate-title">Donate Here!</h2>
                            <div className="payment-methods-container">
                                <div className="paypal-container">
                                    <img src="/PayPal.svg" alt="PayPal" className="paypal-logo"/>
                                    <p className="paypal-donation-text">Click the button below to donate securely via PayPal. Your contribution makes a difference!</p>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="9ENVUMZR3G5C8" />
                                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>

                                <div className="zelle-container">
                                    <img src="/zelle.png" alt="Zelle" className="zelle-logo"/>
                                </div>
                            </div>
                        </div>
                    </section>

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

export default Donate;
