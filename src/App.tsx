import './App.css'
import Navbar from './components/Navbar'

function App() {
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
            {/* Team member placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="team-member">
                <div className="member-image"></div>
                <h3>Team Member</h3>
                <p>Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Desert Storm. All rights reserved. | Contact Us: <a href="mailto:contact@10988.org">contact@10988.org</a></p>
        </div>
      </footer>
    </>
  )
}

export default App
