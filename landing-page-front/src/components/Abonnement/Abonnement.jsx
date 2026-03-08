import React from 'react';
import './Abonnement.css';

const Abonnement = () => {
  return (
    <section className="abonnement-section">
      <div className="abonnement-container">
        
        {/* Carte Etudiant */}
        <div className="plan-card student-card">
          <div className="card-header">
            <h3>Premium Etudiant</h3>
            <div className="price">
              4,99€ <span className="period">/ mois</span>
            </div>
          </div>
          
          <ul className="features-list">
            <li>
              <span className="chevron">&gt;</span>
              Recevoir des alertes immédiates pour les nouvelles missions publiées
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Bénéficier d'une meilleure visibilité auprès des employeurs
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Accès prioritaire à certaines missions
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Disposer de ressources pour améliorer votre employabilité (ateliers CV et coaching)
            </li>
          </ul>

          <div className="card-footer">
            <button className="subscribe-btn">Souscrire</button>
          </div>
        </div>

        {/* Carte Entreprise */}
        <div className="plan-card company-card">
          <div className="card-header">
            <h3>Premium Entreprise</h3>
            <div className="price">
              19,99€ <span className="period">/ mois</span>
            </div>
          </div>

          <ul className="features-list">
            <li>
              <span className="chevron">&gt;</span>
              Visibilité renforcée des annonces
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Accès prioritaire aux profils
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Notifications rapides de candidats disponibles
            </li>
            <li>
              <span className="chevron">&gt;</span>
              Disponibilité des outils facilitant la gestion des missions
            </li>
          </ul>

          <div className="card-footer">
            <button className="subscribe-btn">Souscrire</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Abonnement;