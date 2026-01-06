import React from 'react';
import './PqProfile.css';
import icon from '../../assets/icon.png';

function PqProfile() {
  return (
    <div className="pq-profile-container">
      
      {/* Bloc texte en haut à droite */}
      <div className="pq-profile-top-right">
        <span className="pq-qualification-badge">Mission d'expertise</span>
        <h1 className="pq-profile-title">Techniciens informatique</h1>
      </div>

      {/* Bloc principal image + texte */}
      <div className="pq-profile-content">
        <div className="pq-profile-image-wrapper">
          <img 
            src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Technicien informatique au travail"
            className="pq-profile-image"
          />
        </div>

        <div className="pq-profile-text-content">
          <div>
            <p className="pq-profile-description">
              Freelance informatique recrute un(e) technicien(ne) pour intervenir sur la maintenance et le support informatique auprès de TPE/PME.
            </p>
            <p className="pq-profile-description">
              La mission inclut diagnostics, installations, et assistance utilisateurs. Encadrement, formation et environnement de travail motivant garantis.
            </p>
            <p className="pq-profile-description">
              Vous serez accompagné par un technicien senior, et formé aux procédures internes.
            </p>

            <h2 className="pq-profile-subtitle">Niveau études</h2>
            <p className="pq-profile-description">BTS Informatique, Licence Informatique.</p>

            <div className="pq-details-grid">
              <span className="pq-details-label">Date :</span>
              <span>10 DEC 2024</span>
              
              <span className="pq-details-label">Durée :</span>
              <span>3 mois renouvelables</span>
              
              <span className="pq-details-label">Montant :</span>
              <span>15.20 € / heure (brut)</span>
              
              <span className="pq-details-label">Lieu :</span>
              <span>28 Rue de la République, 69001 Lyon</span>
            </div>
          </div>

          <div>
            <div className="pq-company-info">
              <img 
                src={icon}
                alt="Logo Freelance informatique"
                className="pq-company-logo"
              />
              <span className="font-medium">Freelance informatique</span>
            </div>

            <button className="pq-apply-button">
              Candidater
            </button>
          </div>
        </div>
      </div>

      <a href="#" className="pq-back-link">← Retour</a>
    </div>
  );
}

export default PqProfile;
