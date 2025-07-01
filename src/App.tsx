import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Lee Adams",
      role: "Coach",
      bio: "Start with this for my profile “With over 35 years of experience in mechanical design and manufacturing, Lee Adams brings deep industry expertise and a passion for innovation to the robotics team. A seasoned Mechanical Design Engineer and Certified SolidWorks Expert, he specializes in turning complex engineering concepts into real-world solutions. As Head Coach,  Lee Adams mentors students in design, problem-solving, and teamwork—bridging the gap between classroom learning and cutting-edge engineering practices.”"
    },
    {
      id: 2,
      name: "Colleen Adams",
      role: "Coach",
      bio: "Jane is our mechanical design expert with 4 years of FRC experience. She leads the CAD team and has won multiple design awards in regional competitions."
    }
  ];

  // Function to open the bio modal
  const openBioModal = (id: number) => {
    setSelectedMember(id);
    // Lock scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the bio modal
  const closeBioModal = () => {
    setSelectedMember(null);
    // Restore scrolling when modal is closed
    document.body.style.overflow = '';
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Desert Storm</h1>
          <p className="hero-subtitle">FIRST Robotics Competition Team</p>
          <button className="cta-button" onClick={() => scrollToSection('about')}>Learn More</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam vitae lobortis commodo. Morbi tristique aliquam turpis quis dapibus. Curabitur finibus elit elit, non congue leo vestibulum at. Nunc eu neque nisi. Quisque sed condimentum erat. Curabitur ullamcorper nisi dolor, vel fringilla mauris maximus ac. Nullam sit amet hendrerit augue. Aliquam egestas in velit eget tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ornare, mauris ac semper finibus, elit purus tristique velit, sit amet lobortis ligula nisl vel diam. Nam mattis molestie sapien et lacinia. Nunc sit amet augue nisi. Fusce fermentum congue velit, luctus egestas elit sollicitudin a. Maecenas eleifend a libero eu dapibus. </p>
            </div>
            <div className="about-image">
              {/* Image placeholder */}
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="section-container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="team-member" 
                onClick={() => openBioModal(member.id)}
              >
                <div className="member-image"></div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember !== null && (
        <div className="bio-modal-overlay" onClick={closeBioModal}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeBioModal}>×</button>
            <div className="bio-modal-content">
              <div className="bio-modal-left">
                <div className="member-image large"></div>
                <h2>{teamMembers.find(m => m.id === selectedMember)?.name}</h2>
                <h3>{teamMembers.find(m => m.id === selectedMember)?.role}</h3>
              </div>
              <div className="bio-modal-right">
                <p className="bio-text">{teamMembers.find(m => m.id === selectedMember)?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Our Robots</h2>
          <div className="projects-grid">
            {/* Project placeholders */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="project-card">
                <div className="project-image"></div>
                <h3>Robot Name</h3>
                <p>Season Year</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Desert Storm. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
