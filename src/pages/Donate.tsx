import React from 'react';
import Navbar from '../components/Navbar';
import './Styles/Donate.css';
import {Cell, Legend, Pie, PieChart, Tooltip} from "recharts";

const Donate: React.FC = () => {
    const chartData = [
        { name: 'Tools and material', value: 15000 },
        { name: 'Team swag', value: 2000 },
        { name: 'Admin costs', value: 500 },
        { name: 'Travel/meals', value: 10000 },
        { name: 'Scouting gear', value: 2000 },
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
            <Navbar />
            {/* Donate Section */}
            <section id="donate" className="donate-section">
                <div className="section-container">
                    <h2 className="section-title donate-title">Donate</h2>
                    <div className="donate-content">
                        <div className="donate-text">
                            <p>Desert Storm Robotics is a student-led FRC team committed to bringing STEM education and competitive robotics to rural Arizona. Your donation helps fund life-changing experiences in engineering, programming, and teamwork.</p>
                        </div>
                        <div className="donate-image">
                            <img src="/donate.png" alt="Donate" className="donate-image" />
                        </div>
                    </div>
                    {/* Pie Chart Section */}
                    <div className="donate-chart-wrapper">
                        <PieChart width={800} height={500}>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                label={({ value }) => `$${value.toLocaleString()}`}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                className={"DonatePie"}
                            >
                                {chartData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                                itemSorter="datakey"
                                iconType="square"
                            />
                        </PieChart>
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

export default Donate;
