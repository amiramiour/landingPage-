import React from 'react';
import './Hero.css';
import logoHero from '../../assets/Logo_linkyjob_Blanc.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        
        <img src={logoHero} alt="LINKYJOB" className="hero-logo" />
        
        <h1 className="hero-heading">
          La plateforme qui relie <span className="text-blue">Etudiants internationaux</span> et <span className="text-orange">Employeurs</span> pour des missions adaptées partout en France.
        </h1>

        <div className="hero-cta-buttons">
          <Link to="/espace-etudiant" className="hero-btn btn-student">
            Je suis Etudiant
          </Link>
          
          <Link to="/espace-entreprise" className="hero-btn btn-employer">
            Je suis Entreprise
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;