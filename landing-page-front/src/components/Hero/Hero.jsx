import React from 'react';
import './Hero.css';
import logoHero from '../../assets/Logo_linkyjob_Blanc.png'; 
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
            <span className="hero-students"> Étudiants Internationaux </span>
            <span className="hero-et">et</span>
          </div>
          <div className="hero-line">
            <span className="hero-employers"> Employeurs </span>
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
