import React, { useEffect, useState } from "react";
import "./HistoriqueEtudiant.css";
import icon from "../../assets/icon.png";
// Assure-toi que ces images existent ou utilise les tiennes
import sentIcon from "../../assets/status-submitted.png"; 
import reviewIcon from "../../assets/status-review.png"; 
import acceptIcon from "../../assets/status-accepted.png"; 
import rejectIcon from "../../assets/status-rejected.png"; 

function HistoriqueEtudiant() {
  const [candidatures, setCandidatures] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // On masque les candidatures annulées pour ne pas polluer l'affichage
        const activeData = data.filter(c => c.status !== "cancelled");
        setCandidatures(activeData);
      })
      .catch((err) => console.error(err));
  }, []);

  // --- LOGIQUE DES STATUTS (TEXTE + ICONE) ---
  const renderStatus = (status) => {
    switch (status) {
      case "submitted": // Cas legacy (si existant)
      case "under_review":
        return (
          <>
            En cours de traitement
            <img src={reviewIcon} className="status-icon" alt="review" />
          </>
        );

      case "accepted":
        return (
          <>
            Accepter
            <img src={acceptIcon} className="status-icon" alt="accepted" />
          </>
        );

      case "rejected":
        return (
          <>
            Refuser
            <img src={rejectIcon} className="status-icon" alt="rejected" />
          </>
        );

      default:
        return null;
    }
  };

  // --- LOGIQUE DES BOUTONS ---
  const renderActionButton = (candidature) => {
    switch (candidature.status) {
      case "submitted":
      case "under_review":
        return (
          <button
            className="linky-btn-outline" // Style blanc avec bordure (comme sur ton image 'Annuler')
            onClick={() => cancelCandidature(candidature.id)}
          >
            Annuler
          </button>
        );

      case "accepted":
        return (
          <button className="linky-btn-primary">
            Choisir cette mission
          </button>
        );

      case "rejected":
        return (
          <button 
            className="linky-btn-outline" // Style blanc avec bordure
            onClick={() => retryCandidature(candidature.missionId)}
          >
            Candidater à nouveau
          </button>
        );

      default:
        return null;
    }
  };

  // Action : Annuler
  const cancelCandidature = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/cancel/${id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      // Mise à jour locale (retire la carte)
      setCandidatures(candidatures.filter((c) => c.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Action : Re-Candidater
  const retryCandidature = async (missionId) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/apply/${missionId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        window.location.reload(); // Recharger pour voir le changement d'état
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="historique-etudiant">
      <section className="historique-section">
        <h2 className="historique-title blue">SUIVI DE MES CANDIDATURES</h2>

        <p className="historique-subtitle">
          Retrouvez les missions auxquelles vous avez candidaté
        </p>

        <div className="missions-grid">
          {candidatures.map((c) => (
            <div key={c.id} className="mission-card">
              <img src={icon} className="mission-image" alt="mission" />

              {/* TYPE */}
              <span
                className={`mission-badge ${
                  c.mission.type === "mission_d_expertise" ? "yellow" : "green"
                }`}
              >
                {c.mission.type === "mission_d_expertise"
                  ? "Mission d’expertise"
                  : "Mission de service"}
              </span>

              {/* TITRE */}
              <h3 className="mission-title">{c.mission.title}</h3>

              {/* DESCRIPTION */}
              <p className="mission-description">{c.mission.description}</p>

              {/* STATUS (Gardé au même endroit que ton design) */}
              <div className={`mission-status ${c.status}`}>
                {renderStatus(c.status)}
              </div>

              {/* FOOTER */}
              <div className="linky-service-footer">
                <img src={icon} className="linky-company-logo" alt="logo" />
                <div className="linky-company-info">
                  <span className="linky-company-name">
                    {c.mission.employer?.companyName || "Entreprise"}
                  </span>
                  <span className="linky-date">
                    {new Date(c.createdAt).toLocaleDateString("fr-FR", {
                      day: "2-digit", month: "short", year: "numeric"
                    }).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="mission-btn">
                {renderActionButton(c)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HistoriqueEtudiant;