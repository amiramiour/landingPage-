import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PqProfile.css';
import icon from '../../assets/icon.png';

function PqProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMissionLabel = (type) => {
    switch (type) {
      case "mission_d_expertise":
        return "Mission d’expertise";
      case "mission_de_service":
        return "Mission de service";
      default:
        return "Mission";
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/missions/${id}`)
      .then(res => res.json())
      .then(data => {
        setMission(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: '4rem', textAlign: 'center' }}>Chargement...</p>;
  }

  if (!mission) {
    return <p style={{ padding: '4rem', textAlign: 'center' }}>Mission introuvable</p>;
  }

  return (
    <div className="pq-profile-container">

      {/* Bloc texte en haut */}
      <div className="pq-profile-top-right">
        <span
  className={`pq-qualification-badge ${
    mission.type === "mission_de_service" ? "service" : ""
  }`}
>
  {getMissionLabel(mission.type)}
</span>

        <h1 className="pq-profile-title">{mission.title}</h1>
      </div>

      {/* Bloc principal */}
      <div className="pq-profile-content">

        <div className="pq-profile-image-wrapper">
          <img
            src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
            alt={mission.title}
            className="pq-profile-image"
          />
        </div>

        <div className="pq-profile-text-content">
          <div>
            <p className="pq-profile-description">{mission.description}</p>

            {mission.niveau && (
              <>
                <h2 className="pq-profile-subtitle">Niveau études</h2>
                <p className="pq-profile-description">{mission.niveau}</p>
              </>
            )}

            <div className="pq-details-grid">
              <span className="pq-details-label">Date :</span>
              <span>
                {mission.startDate
                  ? new Date(mission.startDate).toLocaleDateString()
                  : '—'}
              </span>

              <span className="pq-details-label">Durée :</span>
              <span>{mission.durationHours || '—'}</span>

              <span className="pq-details-label">Montant :</span>
              <span>
                {mission.remuneration
                  ? `${mission.remuneration} €`
                  : '—'}
              </span>

              <span className="pq-details-label">Lieu :</span>
              <span>{mission.location || '—'}</span>
            </div>
          </div>

          <div>
            <div className="pq-company-info">
              <img src={icon} alt="Entreprise" className="pq-company-logo" />
              <span className="font-medium">Freelance informatique</span>
            </div>

            <button className="pq-apply-button">
              Candidater
            </button>
          </div>
        </div>
      </div>

      <span
  className="pq-back-link"
  onClick={() => navigate(-1)}
  style={{ cursor: "pointer" }}
>
  &lt; Retour
</span>

    </div>
  );
}

export default PqProfile;
