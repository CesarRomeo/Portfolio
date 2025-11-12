import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Estoy empezando mi camino en la informática y me encanta todo lo relacionado con el desarrollo web. 
            </p>
            <p className="about-description">
              Ya tengo experiencia básica diseñando y creando páginas web aprendida por mi cuenta gracias a videos y proyectos que he hecho por mi cuenta, y en la universidad estoy aprendiendo C y C++ para fortalecer mi base como futuro desarrollador de software.
            </p>
            <p className="about-description">
              Me motiva seguir aprendiendo, experimentar con nuevos lenguajes y construir proyectos cada vez más completos.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <h3>Enfocado en resultados</h3>
                <p>Orientado a entregar soluciones de calidad que superen las expectativas</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <h3>Aprendizaje continuo</h3>
                <p>Siempre explorando nuevas tecnologías y metodologías de desarrollo</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <h3>Trabajo en equipo</h3>
                <p>Colaborativo y comunicativo, con experiencia en metodologías ágiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
