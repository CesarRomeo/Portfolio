import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-position">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-location">📍 {exp.location}</p>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
