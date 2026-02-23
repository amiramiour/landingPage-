import { useEffect, useState } from "react";
import "./HistoriqueEntreprise.css";
import icon from "../../assets/icon.png";
import CandidaturesMission from "./CandidaturesMission";
import CandidatsEntreprise from "./CandidatsEntreprise";
import { useAuth } from "../context/AuthContext";

function HistoriqueEntreprise() {
  const { token, user } = useAuth();
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/missions/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setMissions)
      .catch(console.error);
  }, [token]);

  return (
    <div className="historique-entreprise">

      {!selectedMission && (
        <>
          <section className="historique-section">
            <h2 className="historique-title orange">MISSIONS PUBLIÉES</h2>
            <p className="historique-subtitle">
              Consultez et gérez vos missions publiées en un seul endroit
            </p>

            <div className="missions-grid">
              {missions.map((mission) => (
                <div
                  key={mission.id}
                  className="mission-card"
                  onClick={() => setSelectedMission(mission)}
                >
                  <img src={icon} className="mission-image" />

                  <span
                    className={`mission-badge ${
                      mission.type === "mission_d_expertise"
                        ? "yellow"
                        : "green"
                    }`}
                  >
                    {mission.type === "mission_d_expertise"
                      ? "Mission d’expertise"
                      : "Mission de service"}
                  </span>

                  <h3 className="mission-title">{mission.title}</h3>
                  <p className="mission-description">{mission.description}</p>

                  <div className="linky-service-footer">
                    <img src={icon} className="linky-company-logo" />
                    <div className="linky-company-info">
                      <span className="linky-company-name">
                        {user.companyName}
                      </span>
                      <span className="linky-date">
                        {new Date(mission.createdAt).toLocaleDateString("fr-FR")}
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

          <CandidatsEntreprise />
        </>
      )}

      {selectedMission && (
        <div className="mission-detail-layout">

          <div className="mission-detail-left">
            <button
              className="linky-btn-modifier"
              onClick={() => setSelectedMission(null)}
            >
              ← Retour aux missions
            </button>

            <div className="mission-card">
              <img src={icon} className="mission-image" />

              <span
                className={`mission-badge ${
                  selectedMission.type === "mission_d_expertise"
                    ? "yellow"
                    : "green"
                }`}
              >
                {selectedMission.type === "mission_d_expertise"
                  ? "Mission d’expertise"
                  : "Mission de service"}
              </span>

              <h3 className="mission-title">{selectedMission.title}</h3>
              <p className="mission-description">
  {selectedMission.description}
</p>

<div className="mission-extra">
  <p>
    <strong>Niveau études :</strong>{" "}
    {selectedMission.niveau}
  </p>

  <p>
    <strong>Date :</strong>{" "}
    {new Date(selectedMission.startDate).toLocaleDateString("fr-FR")}
  </p>

  <p>
    <strong>Durée :</strong>{" "}
    {selectedMission.durationHours} h
  </p>

  <p>
    <strong>Montant :</strong>{" "}
    {selectedMission.remuneration} € / heure
  </p>

  <p>
    <strong>Lieu :</strong>{" "}
    {selectedMission.location}
  </p>
</div>


              <div className="linky-service-footer">
                <img src={icon} className="linky-company-logo" />
                <div className="linky-company-info">
                  <span className="linky-company-name">
                    {user.companyName}
                  </span>
                  <span className="linky-date">
                    {new Date(selectedMission.createdAt).toLocaleDateString("fr-FR")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-detail-right">
<CandidaturesMission
  missionId={selectedMission.id}
  mission={selectedMission}
/>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoriqueEntreprise;
