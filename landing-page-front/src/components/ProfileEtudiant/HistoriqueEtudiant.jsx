import { useEffect, useState } from "react";
import "./HistoriqueEtudiant.css";
import icon from "../../assets/icon.png";
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
      .then(res => res.json())
      .then(data => setCandidatures(data))
      .catch(err => console.error(err));
  }, []);

const renderStatus = (status) => {
  switch (status) {
    case "submitted":
      return (
        <>
          Envoyée
          <img src={sentIcon} className="status-icon" />

        </>
      );

    case "under_review":
      return (
        <>
          En cours de traitement
          <img src={reviewIcon} className="status-icon" />

        </>
      );

    case "accepted":
      return (
        <>
          Acceptée
                    <img src={acceptIcon} className="status-icon" />

        </>
      );

    case "rejected":
      return (
        <>
          Refusée
                    <img src={rejectIcon} className="status-icon" />

        </>
      );

    default:
      return null;
  }
};


  const renderActionButton = (candidature) => {
    switch (candidature.status) {
      case "submitted":
      case "under_review":
        return (
          <button
            className="linky-btn-secondary"
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
          <button className="linky-btn-outline">
            Candidater à nouveau
          </button>
        );

      default:
        return null;
    }
  };

  const cancelCandidature = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/cancel/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // refresh
    setCandidatures(candidatures.filter(c => c.id !== id));
  };

  return (
    <div className="historique-etudiant">
      <section className="historique-section">
        <h2 className="historique-title blue">
          SUIVI DE MES CANDIDATURES
        </h2>

        <p className="historique-subtitle">
          Retrouvez les missions auxquelles vous avez candidaté
        </p>

        <div className="missions-grid">
          {candidatures.map((c) => (
            <div key={c.id} className="mission-card">

              <img src={icon} className="mission-image" />

              {/* TYPE */}
              <span
                className={`mission-badge ${
                  c.mission.type === "mission_d_expertise"
                    ? "yellow"
                    : "green"
                }`}
              >
                {c.mission.type === "mission_d_expertise"
                  ? "Mission d’expertise"
                  : "Mission de service"}
              </span>

              {/* TITRE */}
              <h3 className="mission-title">{c.mission.title}</h3>

              {/* DESCRIPTION */}
              <p className="mission-description">
                {c.mission.description}
              </p>

              {/* STATUS */}
              <div className={`mission-status ${c.status}`}>
                {renderStatus(c.status)}
              </div>

              {/* FOOTER */}
              <div className="linky-service-footer">
                <img src={icon} className="linky-company-logo" />
                <div className="linky-company-info">
                  <span className="linky-company-name">
                    {c.mission.employer?.companyName || "Entreprise"}
                  </span>
                  <span className="linky-date">
                    {new Date(c.createdAt).toLocaleDateString("fr-FR")}
                  </span>
                </div>
              </div>

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
