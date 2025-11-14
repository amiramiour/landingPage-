import React from 'react';
import './PrestaQualifiesHero.css';
import logoHero from '../../assets/LogoHero.png';
import { Link } from 'react-router-dom';

const prq = () => {
  return (
    <div className="prq-hero-container">
      <div className="prq-hero">
      <img src={logoHero} alt="LINKYJOB Logo" className="prq-hero-logo" />
        
        <h1 className="prq-hero-title">
          <div className="prq-hero-line">
            <span className="prq-hero-students">Découvrez nos </span>
            <span className="prq-hero-question">Missions D'expertise</span>
          </div>
          
        </h1>
        <Link to="/prestationsqualifiee/details" className="prq-hero-button-savoir">
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default prq;
