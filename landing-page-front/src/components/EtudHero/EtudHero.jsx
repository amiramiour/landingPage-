import React from 'react';
import './EtudHero.css';
import logoHero from '../../assets/LogoHero.png';
import { Link } from 'react-router-dom';

const EtudHero = () => {
  return (
    <div className="etud-hero-container">
      <div className="etud-hero">
      <img src={logoHero} alt="LINKYJOB Logo" className="etud-hero-logo" />
        
        <h1 className="etud-hero-title">
          <div className="etud-hero-line">
            <span className="etud-hero-students">ESPACE ÉTUDIANT</span>
          </div>
          <div className="etud-hero-line">
            <span className="etud-hero-question">Étudiant international ?</span>
            <span className="etud-hero-find">Trouvez un job flexible avec</span>
            <span className="etud-hero-linky">LinkyJob !</span>
          </div>
        </h1>

        <div className="etud-hero-cta">
          <div className="etud-hero-search">
            <input 
              type="text" 
              className="etud-hero-input" 
              placeholder="Trouver un Job..." 
            />
            <button className="etud-hero-button">Recherche</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtudHero;
