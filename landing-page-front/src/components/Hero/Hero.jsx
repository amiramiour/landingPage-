import React from 'react';
import './Hero.css';
import logoHero from '../../assets/LogoHero.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <img src={logoHero} alt="LINKYJOB Logo" className="hero-logo" />
        
        <h1 className="hero-heading">
          <div className="hero-line">
            <span className="hero-plateforme">La plateforme </span>
            <span className="hero-relie"> qui relie </span>
            <span className="hero-students"> étudiants internationaux </span>
          </div>
          <div className="hero-line">
            <span className="hero-et">et</span>
            <span className="hero-employers"> employeurs </span>
            <span className="hero-missions"> pour des missions adaptées partout en France.</span>
          </div>
        </h1>
        <div className="hero-cta-buttons">
          <Link to="/espace-etudiant" className="hero-btn-student">Je suis Etudiant</Link>
          <button className="hero-btn-employer">Je suis Particulier / Entreprise</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
