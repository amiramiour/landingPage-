import React from 'react';
import './EtudHero.css';
import logoHero from '../../assets/Logo_linkyjob_Blanc.png';

const EtudHero = () => {
  return (
    <div className="etud-hero-container">
      <div className="etud-hero">
        <img src={logoHero} alt="LINKYJOB" className="etud-hero-logo" />
        
        <h1 className="etud-hero-title">
          <span className="etud-hero-students">ESPACE ÉTUDIANT</span>
          <span className="etud-hero-subtitle-group">
            Étudiant international ? Trouvez un job flexible avec <span className="text-blue">LinkyJob!</span>
          </span>
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