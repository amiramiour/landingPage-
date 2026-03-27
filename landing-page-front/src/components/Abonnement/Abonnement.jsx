import React, { useState } from 'react';
import './Abonnement.css';

const Abonnement = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const [popup, setPopup] = useState({
  show: false,
  message: "",
  type: "" 
});
  const subscribe = async (type) => {
    try {
      if (!token || !user) {
        setPopup({
          show: true,
          message: "Vous devez être connecté",
          type: "error"
        });
        return;
      }

      if (user.isPremium) {
        setPopup({
          show: true,
          message: "Vous êtes déjà premium ⭐",
          type: "error"
        });
        return;
      }

      if (user.role !== type) {
        setPopup({
          show: true,
          message: "Abonnement non autorisé",
          type: "error"
        });
        return;
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ type }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPopup({
          show: true,
          message: data.error || "Erreur abonnement",
          type: "error"
        });
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      setPopup({
        show: true,
        message: "Paiement simulé réussi ✅",
        type: "success"
      });

    } catch (err) {
      console.error(err);
      setPopup({
        show: true,
        message: "Erreur réseau",
        type: "error"
      });
    }
  };

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
            <button
              className="subscribe-btn"
              disabled={!user || user.role !== "student"}
              onClick={() => subscribe("student")}
            >
              Souscrire
            </button>
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
            <button
              className="subscribe-btn"
              disabled={!user || user.role !== "company"}
              onClick={() => subscribe("company")}
            >
              Souscrire
            </button>
          </div>
        </div>
{popup.show && (
  <div className="popup-overlay">
    <div className={`popup ${popup.type}`}>
      <p>{popup.message}</p>
      <button onClick={() => setPopup({ ...popup, show: false })}>
        OK
      </button>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default Abonnement;