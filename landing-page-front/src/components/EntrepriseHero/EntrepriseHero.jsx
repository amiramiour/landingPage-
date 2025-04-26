import React from 'react';
import './EntrepriseHero.css';
import logoHero from '../../assets/LogoHero.png';
import { Link } from 'react-router-dom';

const Entreprise = () => {
  return (
    <div className="entreprise-hero-container">
      <div className="entreprise-hero">
      <img src={logoHero} alt="LINKYJOB Logo" className="entreprise-hero-logo" />
        
        <h1 className="entreprise-hero-title">
          <div className="entreprise-hero-line">
            <span className="entreprise-hero-students">ESPACE Entreprise</span>
          </div>
          <div className="entreprise-hero-line">
            <span className="entreprise-hero-question">Accédez </span>
            <span className="entreprise-hero-find">à une nouvelle génération de </span>
            <span className="entreprise-hero-linky">Talents internationaux.</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Entreprise;
