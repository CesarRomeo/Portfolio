import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">🎓</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-location">📍 {edu.location}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
