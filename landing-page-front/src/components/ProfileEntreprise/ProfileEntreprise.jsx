import React from 'react';
import './ProfileEntreprise.css';
import { Link } from 'react-router-dom';

const ProfileEntreprise = () => {
  return (
    <div className="pe-container">
      <div className="pe-profile">
        <div className="pe-image-wrapper">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Annette Balck"
            className="pe-image"
          />
        </div>
        <div className="pe-info">
          <h2 className="pe-name">Annette Balck</h2>
          <p><strong>Âge :</strong> 22 ans</p>
          <p><strong>Nationalité :</strong> Allemande</p>
          <p><strong>Langues :</strong> Allemand (natif), Anglais (C1), Français (B2)</p>
          <p><strong>Formation :</strong> Université Lyon 2 – Master 1 en Communication interculturelle</p>
          <h2 className="pe-missions-title">Mission recherchée :</h2>
            <ul className="pe-missions">
            <li>🎨 Animatrice culturelle</li>
            <li>📘 Soutien scolaire</li>
            <li>🎶 Ateliers périscolaires</li>
            </ul>

          <button className="pe-btn">Contacter</button>
        </div>
      </div>
      <Link to="/" className="pe-back">&lt; Retour</Link>
    </div>
  );
};

export default ProfileEntreprise;
