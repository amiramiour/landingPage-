import { useState } from "react";
import "./HistoriqueEntreprise.css";
import CandidatsEntreprise from "./CandidatsEntreprise";
import icon from "../../assets/icon.png";
import CandidaturesMission from "./CandidaturesMission";

/* ================= DATA STATIQUE ================= */

const missions = [
  {
    id: 1,
    type: "expertise",
    title: "Technicien informatique",
    description:
      "Maintenance, diagnostic, installation et assistance utilisateurs.",
    date: "15 DEC 2024",
  },
  {
    id: 2,
    type: "service",
    title: "Assistance informatique de base",
    description:
      "Support utilisateur et installation logicielle.",
    date: "18 DEC 2024",
  },
  {
    id: 3,
    type: "service",
    title: "Développement application web",
    description:
      "Développement front-end React et intégration API.",
    date: "20 DEC 2024",
  },
  {
    id: 4,
    type: "service",
    title: "Développement application web",
    description:
      "Développement front-end React et intégration API.",
    date: "20 DEC 2024",
  },
  {
    id: 5,
    type: "service",
    title: "Développement application web",
    description:
      "Développement front-end React et intégration API.",
    date: "20 DEC 2024",
  },
  
];

/* ================= COMPONENT ================= */

function HistoriqueEntreprise() {
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <div className="historique-entreprise">

      {/* ================================================= */}
      {/* ================= MODE GRILLE =================== */}
      {/* ================================================= */}

      {!selectedMission && (
        <>
          {/* ===== TITRE ===== */}
          <section className="historique-section">
            <h2 className="historique-title orange">MISSIONS PUBLIÉES</h2>
            <p className="historique-subtitle">
              Consultez et gérez vos missions publiées en un seul endroit
            </p>

            {/* ===== GRILLE MISSIONS ===== */}
            <div className="missions-grid">
              {missions.map((mission) => (
                <div
                  key={mission.id}
                  className="mission-card"
                  onClick={() => setSelectedMission(mission)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={icon} alt={mission.title} className="mission-image" />

                  <span
                    className={`mission-badge ${
                      mission.type === "expertise" ? "yellow" : "green"
                    }`}
                  >
                    {mission.type === "expertise"
                      ? "Mission d’expertise"
                      : "Mission de service"}
                  </span>

                  <h3 className="mission-title">{mission.title}</h3>

                  <p className="mission-description">
                    {mission.description}
                  </p>

                  <div className="linky-service-footer">
                    <img src={icon} className="linky-company-logo" />
                    <div className="linky-company-info">
                      <span className="linky-company-name">
                        Freelance informatique
                      </span>
                      <span className="linky-date">
                        {mission.date}
                      </span>
                    </div>
                  </div>

                  <button className="linky-btn-modifier mission-btn">
                    Modifier
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* ===== ÉTUDIANTS AYANT CANDIDATÉ (TOUTES MISSIONS) ===== */}
          <CandidatsEntreprise />
        </>
      )}

      {/* ================================================= */}
      {/* ================= MODE DÉTAIL =================== */}
      {/* ================================================= */}

      {selectedMission && (
        <div className="mission-detail-layout">

          {/* ===== GAUCHE : DÉTAIL MISSION ===== */}
          <div className="mission-detail-left">

            <button
              className="linky-btn-modifier"
              style={{ marginBottom: "20px" }}
              onClick={() => setSelectedMission(null)}
            >
              ← Retour aux missions
            </button>

            <div className="mission-card">
              <img src={icon} className="mission-image" />

              <span
                className={`mission-badge ${
                  selectedMission.type === "expertise"
                    ? "yellow"
                    : "green"
                }`}
              >
                {selectedMission.type === "expertise"
                  ? "Mission d’expertise"
                  : "Mission de service"}
              </span>

              <h3 className="mission-title">
                {selectedMission.title}
              </h3>

              <p className="mission-description">
                {selectedMission.description}
              </p>

              <div className="mission-extra">
                <p><strong>Niveau d’études :</strong> BTS / Licence</p>
                <p><strong>Durée :</strong> 6 mois</p>
                <p><strong>Lieu :</strong> Lyon</p>
              </div>

              <div className="linky-service-footer">
                <img src={icon} className="linky-company-logo" />
                <div className="linky-company-info">
                  <span className="linky-company-name">
                    Freelance informatique
                  </span>
                  <span className="linky-date">
                    {selectedMission.date}
                  </span>
                </div>
              </div>

              <button className="linky-btn-modifier mission-btn">
                Modifier
              </button>
            </div>
          </div>

          {/* ===== DROITE : CANDIDATURES REÇUES POUR CETTE MISSION ===== */}
          <div className="mission-detail-right">
  <CandidaturesMission />
</div>


        </div>
      )}

    </div>
  );
}

export default HistoriqueEntreprise;
