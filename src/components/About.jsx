import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm starting my journey in computer science and I love everything related to web development.
            </p>
            <p className="about-description">
              I already have basic experience designing and creating web pages learned on my own through videos and projects I've done independently, and at university I'm learning C and C++ to strengthen my foundation as a future software developer.
            </p>
            <p className="about-description">
              I'm motivated to keep learning, experiment with new languages and build increasingly complete projects.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <h3>Results-Focused</h3>
                <p>Oriented to deliver quality solutions that exceed expectations</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <h3>Continuous Learning</h3>
                <p>Always exploring new technologies and development methodologies</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <h3>Teamwork</h3>
                <p>Collaborative and communicative, eager to work and learn together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
