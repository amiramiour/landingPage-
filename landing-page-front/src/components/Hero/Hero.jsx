import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.png'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={logo} alt="LINKYJOB Logo" className="logo-image-hero" />
        
        <h1>
          <div className="line">
            <span className="la-plateforme">La plateforme </span>
            <span className="qui-relie"> qui relie </span>
            <span className="students"> étudiants internationaux </span>
          </div>
          <div className="line">
            <span className="et">et</span>
            <span className="employers"> employeurs </span>
            <span className="missions"> pour des missions adaptées partout en France.</span>
          </div>
        </h1>
        <div className="cta-buttons">
          <button className="btn-student">Je suis Etudiant</button>
          <button className="btn-employer">Je suis Particulier / Entreprise</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
