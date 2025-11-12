import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">CR</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
