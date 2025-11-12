import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">💻</span>
              <h3 className="category-title">Frontend</h3>
            </div>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">⚙️</span>
              <h3 className="category-title">Backend</h3>
            </div>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🛠️</span>
              <h3 className="category-title">Herramientas</h3>
            </div>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <span className="category-icon">🌍</span>
              <h3 className="category-title">Idiomas</h3>
            </div>
            <div className="languages-list">
              {skills.languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
