import React from 'react';
import './EntrepriseHero.css';
import logoHero from '../../assets/Logo_linkyjob_Blanc.png';
import { useNavigate } from 'react-router-dom';

const Entreprise = () => {
  const navigate = useNavigate();
  return (
    <div className="entreprise-hero-container">
      <div className="entreprise-hero">
        <img src={logoHero} alt="LINKYJOB" className="entreprise-hero-logo" />
        
        <h1 className="entreprise-hero-title">
          <span className="entreprise-hero-header">ESPACE ENTREPRISE</span>
          <span className="entreprise-hero-subtitle">
            Accédez à une nouvelle génération de <span className="text-orange">Talents internationaux</span>
          </span>
        </h1>

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