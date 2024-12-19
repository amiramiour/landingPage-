import React from 'react';
import './EtudHero.css';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={logo} alt="LINKYJOB Logo" className="logo-image-hero" />
        
        <h1>
          <div className="line">
            <span className="students1"> ESPACE ETUDIANT </span>
          </div>
          <div className="line">
            <span className="Étudiantinternational">Étudiant international ?</span>
            <span className="Trouvez"> Trouvez un job flexible avec </span>
            <span className="LinkyJob"> LinkyJob !</span>
          </div>
        </h1>
            <div className="cta-buttons">
            <div className="search-bar">
                <input 
                type="text" 
                className="search-input" 
                placeholder="Trouver un Job..." 
                />
                <button className="search-button">Recherche</button>
            </div>
            </div>

      </div>
    </div>
  );
};

export default Hero;
