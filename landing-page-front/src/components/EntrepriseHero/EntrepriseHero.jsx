import React from 'react';
import './EntrepriseHero.css';
import logoHero from '../../assets/Logo_linkyjob_Blanc.png';
import { useNavigate } from 'react-router-dom';

const Entreprise = () => {
  const navigate = useNavigate();
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

        {/* BOUTON */}
        <div className="entreprise-hero-btn-wrapper">
          <button 
            className="entreprise-hero-add-btn"
            onClick={() => navigate("/addprestation")}
          >
            <span className="entreprise-hero-plus">+</span>
            Ajouter une prestation
          </button>
        </div>

      </div>
    </div>
  );
};

export default Entreprise;
