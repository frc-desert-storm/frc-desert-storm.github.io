import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import './Styles/Home.css';
import Contact from "../components/Contact.tsx";
import {useLocation} from "react-router-dom";

const Home: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<number | null>(null)
    const [selectedRobot, setSelectedRobot] = useState<number | null>(null)
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // slight delay to ensure rendering
            }
        }
    }, [location]);

    const teamMembers = [
        {
            id: 1,
            name: 'Lee Adams',
            role: 'Coach',
            image: '/Lee.png',
            bio: 'With over 35 years of experience in mechanical design and manufacturing, Lee Adams brings deep industry expertise and a passion for innovation to the robotics team. A seasoned Mechanical Design Engineer and Certified SolidWorks Expert, he specializes in turning complex engineering concepts into real-world solutions. As Head Coach,  Lee Adams mentors students in design, problem-solving, and teamwork—bridging the gap between classroom learning and cutting-edge engineering practices.'
        },
        {
            id: 2,
            name: 'Colleen Adams',
            role: 'Coach',
            image: '/Colleen.png',
            bio: 'Colleen Adams is a dedicated mom-coach and STEM advocate with over a decade of homeschooling experience. With a background in psychology, education, and photography, she brings creativity and leadership to her role as founder of a new FRC robotics team. After volunteering with an FRC team for two years, she saw the impact of STEM on youth and is now committed to making robotics accessible to all students in her community.'
        },
        {
            id: 3,
            name: 'Lyle Sandoval',
            role: 'Mentor',
            image: '/Lyle.png',
            bio: 'With a natural gift for building, creating, and connecting with people, Lyle brings energy and creativity to our robotics team. A talented artist who designed our team logo, he combines hands-on skills with a passion for inspiring young minds. As a dedicated mentor, he’s especially driven to make robotics accessible to rural families, helping bridge the gap between innovation and opportunity.'
        }

    ]

    const robots = [
        {
            id: 1,
            name: 'Coming Soon...',
            year: '2026',
            image: '/robot.png',
            description: 'Coming Soon...'
        },
        {
            id: 2,
            name: 'Coming Soon...',
            year: '2027',
            image: '/robot.png',
            description: 'Coming Soon...'
        },
        {
            id: 3,
            name: 'Coming Soon...',
            year: '2028',
            image: '/robot.png',
            description: 'Coming Soon...'
        }
    ]

    const openBioModal = (id: number) => {
        setSelectedMember(id)
        document.body.style.overflow = 'hidden'
    }

    const closeBioModal = () => {
        setSelectedMember(null)
        document.body.style.overflow = ''
    }

    const openRobotModal = (id: number) => {
        setSelectedRobot(id)
        document.body.style.overflow = 'hidden'
    }

    const closeRobotModal = () => {
        setSelectedRobot(null)
        document.body.style.overflow = ''
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const selectedMemberData = teamMembers.find(m => m.id === selectedMember)
    const selectedRobotData = robots.find(p => p.id === selectedRobot)

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <img src="/logo.png" alt="Desert Storm Logo" className="hero-logo" />
                    <h1>Desert Storm</h1>
                    <p className="hero-subtitle">FIRST Robotics Competition Team</p>
                    <button className="cta-button" onClick={() => scrollToSection('about')}>
                        Learn More
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="section-container">
                    <h2 className="section-title">About Us</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                We are Desert Storm, a rookie FIRST Robotics Competition (FRC) team based in New River, AZ. As a brand-new team, we’re bringing students, parents, and mentors together to launch something exciting and impactful in our community.
                            </p>
                            <p>
                                FIRST Robotics Competition is a global high school robotics program that combines the excitement of sport with the rigors of science and technology.
                            </p>
                            <p>
                                At Desert Storm, we are committed to providing students with hands-on STEM experiences that ignite curiosity and build future-ready skills.
                            </p>
                            <p>
                                Founded by a group of passionate homeschooling families, educators, students and volunteers, our team is rooted in community and fueled by a shared vision: to make STEM accessible, inspiring, and fun.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/about.png" alt="About Us" className="about-image"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <div className="section-container">
                    <h2 className="section-title">Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map(member => (
                            <div key={member.id} className="team-member" onClick={() => openBioModal(member.id)}>
                                <img src={member.image} alt={member.name} className="member-image" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Modal */}
            {selectedMemberData && (
                <div className="bio-modal-overlay" onClick={closeBioModal}>
                    <div className="bio-modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeBioModal}>
                            ×
                        </button>
                        <div className="bio-modal-content">
                            <div className="bio-modal-left">
                                <img src={selectedMemberData.image} alt={selectedMemberData.name} className="member-image large" />
                                <h2>{selectedMemberData.name}</h2>
                                <h3>{selectedMemberData.role}</h3>
                            </div>
                            <div className="bio-modal-right">
                                <p className="bio-text">{selectedMemberData.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Robots Section */}
            <section id="robots" className="robots-section">
                <div className="section-container">
                    <h2 className="section-title">Our Robots</h2>
                    <div className="robots-grid">
                        {robots.map(robot => (
                            <div key={robot.id} className="robot-card" onClick={() => openRobotModal(robot.id)}>
                                <img src={robot.image} alt={robot.name} className="robot-image" />
                                <h3>{robot.name}</h3>
                                <p>{robot.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Robot Modal */}
            {selectedRobotData && (
                <div className="bio-modal-overlay" onClick={closeRobotModal}>
                    <div className="bio-modal" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeRobotModal}>
                            ×
                        </button>
                        <div className="bio-modal-content">
                            <div className="bio-modal-left">
                                <img src={selectedRobotData.image} alt={selectedRobotData.name} className="robot-image large" />
                                <h2>{selectedRobotData.name}</h2>
                                <h3>{selectedRobotData.year}</h3>
                            </div>
                            <div className="bio-modal-right">
                                <p className="bio-text">{selectedRobotData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <footer className="footer">
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Desert Storm. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
