import "./HistoriqueEtudiant.css";
import icon from "../../assets/icon.png";

/* ================= DATA STATIQUE ================= */

const candidatures = [
  {
    id: 1,
    type: "expertise",
    title: "Technicien informatique",
    description:
      "Maintenance, diagnostic, installation et assistance utilisateurs.",
    entreprise: "Freelance informatique",
    date: "15 DEC 2024",
    status: "envoye",
  },
  {
    id: 2,
    type: "service",
    title: "Cours de soutien de langue étrangère",
    description:
      "Accompagnement linguistique pour étudiants internationaux.",
    entreprise: "Completude",
    date: "15 DEC 2024",
    status: "en_cours",
  },
  {
    id: 3,
    type: "expertise",
    title: "Développement d’une application web",
    description:
      "Développement front-end React et intégration API.",
    entreprise: "Freelance informatique",
    date: "15 DEC 2024",
    status: "accepte",
  },
  {
    id: 4,
    type: "service",
    title: "Animateur interculturel",
    description:
      "Animation d’ateliers interculturels pour enfants.",
    entreprise: "CDJ",
    date: "15 DEC 2024",
    status: "refuse",
  },
  {
    id: 5,
    type: "service",
    title: "Animateur interculturel",
    description:
      "Animation d’ateliers interculturels pour enfants.",
    entreprise: "CDJ",
    date: "15 DEC 2024",
    status: "refuse",
  },
];

/* ================= COMPONENT ================= */

function HistoriqueEtudiant() {
  const renderActionButton = (status) => {
    switch (status) {
      case "envoye":
      case "en_cours":
        return (
          <button className="linky-btn-secondary">
            Annuler
          </button>
        );

      case "accepte":
        return (
          <button className="linky-btn-primary">
            Choisir cette mission
          </button>
        );

      case "refuse":
        return (
          <button className="linky-btn-outline">
            Candidater à nouveau
          </button>
        );

      default:
        return null;
    }
  };

  return (
    <div className="historique-etudiant">

      {/* ===== TITRE ===== */}
      <section className="historique-section">
        <h2 className="historique-title blue">
          SUIVI DE MES CANDIDATURES
        </h2>
        <p className="historique-subtitle">
          Retrouvez les missions auxquelles vous avez candidaté
        </p>

        {/* ===== GRILLE ===== */}
        <div className="missions-grid">
          {candidatures.map((mission) => (
            <div key={mission.id} className="mission-card">

              <img
                src={icon}
                alt={mission.title}
                className="mission-image"
              />

              {/* BADGE TYPE */}
              <span
                className={`mission-badge ${
                  mission.type === "expertise" ? "yellow" : "green"
                }`}
              >
                {mission.type === "expertise"
                  ? "Mission d’expertise"
                  : "Mission de service"}
              </span>

              {/* TITRE */}
              <h3 className="mission-title">{mission.title}</h3>

              {/* DESCRIPTION */}
              <p className="mission-description">
                {mission.description}
              </p>

              {/* ===== STATUS ===== */}
              <div className={`mission-status ${mission.status}`}>
                {mission.status === "envoye" && "Envoyée"}
                {mission.status === "en_cours" && "En cours de traitement"}
                {mission.status === "accepte" && "Acceptée"}
                {mission.status === "refuse" && "Refusée"}
              </div>

              {/* FOOTER */}
              <div className="linky-service-footer">
                <img src={icon} className="linky-company-logo" />
                <div className="linky-company-info">
                  <span className="linky-company-name">
                    {mission.entreprise}
                  </span>
                  <span className="linky-date">{mission.date}</span>
                </div>
              </div>

              {/* ACTION */}
              <div className="mission-btn">
                {renderActionButton(mission.status)}
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HistoriqueEtudiant;
