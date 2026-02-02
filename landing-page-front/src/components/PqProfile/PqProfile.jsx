import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PqProfile.css';
import icon from '../../assets/icon.png';
import checkVert from "../../assets/checkvert.png";

function PqProfile() {
  const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
const [alreadyApplied, setAlreadyApplied] = useState(false);

const isStudent = user?.role === "student";

  const { id } = useParams();
  const navigate = useNavigate();

  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [kycStatus, setKycStatus] = useState(null);
  const isMissionExpired = mission?.startDate
  ? new Date(mission.startDate) < new Date()
  : false;
const [showSuccess, setShowSuccess] = useState(false);


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
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch("http://localhost:3000/documents/kyc-status", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("KYC non accessible");
      return res.json();
    })
    .then((data) => {
      setKycStatus(data);
    })
    .catch((err) => {
      console.warn(err.message);
    });
}, []);
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token || !isStudent) return;

  fetch("http://localhost:3000/api/candidatures/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      const candidature = data.find(
        (c) => c.missionId === Number(id)
      );

      if (!candidature) {
        setAlreadyApplied(false);
        return;
      }

      // ✅ Si refusée → il peut recandidater
      if (candidature.status === "rejected") {
        setAlreadyApplied(false);
      } else {
        setAlreadyApplied(true);
      }
    })
    .catch(err => {
      console.warn("Erreur historique candidatures", err);
    });
}, [id, isStudent]);



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
const canApply =
  isStudent &&
  kycStatus?.validated === true &&
  !alreadyApplied &&
  !isMissionExpired;



const handleApply = async () => {
  if (!canApply) return;

  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch(
      `http://localhost:3000/api/candidatures/apply/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erreur candidature");
      return;
    }

    // ✅ succès
    setShowSuccess(true);
    setAlreadyApplied(true);
  } catch (err) {
    console.error("Erreur candidature", err);
  }
};



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

<button
  className={`pq-apply-button ${!canApply ? "disabled" : ""}`}
  disabled={!canApply}
  onClick={handleApply}
  title={
    !isStudent
      ? "Seuls les étudiants peuvent candidater"
      : isMissionExpired
      ? "Cette mission est terminée"
      : alreadyApplied
      ? "Vous avez déjà candidaté à cette mission"
      : !kycStatus?.validated
      ? "Votre dossier doit être validé pour candidater"
      : ""
  }
>
  {alreadyApplied ? "Déjà candidaté" : "Candidater"}
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
{showSuccess && (
  <div className="modal-overlay">
    <div className="modal-content">
      <img
        src={checkVert}
        alt="Succès"
        className="modal-icon"
      />

      <p>
        Votre candidature a été envoyée avec succès.
        <br />
        Consultez le suivi pour connaître l’état de votre candidature.
      </p>

      <button onClick={() => setShowSuccess(false)}>
        OK
      </button>
    </div>
  </div>
)}

    </div>
    
  );
}

export default PqProfile;
