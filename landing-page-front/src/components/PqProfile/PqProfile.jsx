import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PqProfile.css';
import icon from '../../assets/icon.png';
import checkVert from "../../assets/Container.png";

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
  const isMissionExpired = mission?.startDate ? new Date(mission.startDate) < new Date() : false;

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const getMissionLabel = (type) => {
    switch (type) {
      case "mission_d_expertise": return "Mission d’expertise";
      case "mission_de_service": return "Mission de service";
      default: return "Mission";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch(`${import.meta.env.VITE_API_URL}/documents/kyc-status`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => res.ok ? res.json() : Promise.reject()).then(setKycStatus).catch(() => {});
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isStudent) return;
    fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/my`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => res.json()).then(data => {
      const candidature = data.find((c) => c.missionId === Number(id));
      const isBlocked = candidature && !["rejected", "cancelled"].includes(candidature.status);
      setAlreadyApplied(isBlocked);
    }).catch(() => {}); 
  }, [id, isStudent]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/missions/${id}`)
      .then(res => res.json())
      .then(data => { setMission(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="pq-loading">Chargement...</div>;
  if (!mission) return <div className="pq-loading">Mission introuvable</div>;

  const canApply = isStudent && kycStatus?.validated === true && !alreadyApplied && !isMissionExpired;
const handleRequestApply = () => {
  setErrorMessage("");
  if (canApply) setShowConfirm(true);
};  
  const handleConfirmApplication = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/candidatures/apply/${id}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setErrorMessage(data.error || "Une erreur est survenue");
      setShowConfirm(false);
      return;
    }

    setShowConfirm(false);
    setShowSuccess(true);
    setAlreadyApplied(true);

  } catch (err) {
    setErrorMessage("Erreur réseau");
    setShowConfirm(false);
  }
};

  return (
    <div className="pq-wrapper">
      
      <div className="pq-grid-container">
        
        <div className="pq-left-column">
          <img
            src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg"
            alt={mission.title}
            className="pq-main-image"
          />
        </div>

        <div className="pq-right-column">
          
          <span className={`pq-badge ${mission.type === "mission_de_service" ? "service" : "expertise"}`}>
            {getMissionLabel(mission.type)}
          </span>

          <h1 className="pq-title">{mission.title}</h1>

          <div className="pq-description">
            {mission.description}
          </div>

          {mission.niveau && (
            <div>
              <div className="pq-subtitle">Niveau études</div>
              <div className="pq-text">{mission.niveau}</div>
            </div>
          )}

          <div className="pq-details-list">
            <div className="pq-detail-row">
              <strong>Date début de mission :</strong> 
              <span> {mission.startDate ? new Date(mission.startDate).toLocaleDateString() : 'À définir'}</span>
            </div>
            <div className="pq-detail-row">
              <strong>Durée :</strong> 
              <span> {mission.durationHours || 'Non spécifiée'}</span>
            </div>
            <div className="pq-detail-row">
              <strong>Montant :</strong> 
              <span> {mission.remuneration ? `${mission.remuneration} € / heure` : '—'}</span>
            </div>
            <div className="pq-detail-row">
              <strong>Lieu :</strong> 
              <span> {mission.location || '—'}</span>
            </div>
          </div>

          <div className="pq-action-area">
             <div className="pq-company-info">
            <img
              src={`${import.meta.env.VITE_API_URL}/${mission.employer?.photoUrl}`}
              className="pq-company-logo"
            />              <span className="font-medium">{mission.employer?.companyName}</span>
            </div>
            {errorMessage && (
    <div className="error-message">
      {errorMessage}
    </div>
  )}
            <button
              className={`pq-apply-button ${!canApply ? "disabled" : ""}`}
              disabled={!canApply}
              onClick={handleRequestApply}
              title={
                !isStudent ? "Seuls les étudiants peuvent candidater" :
                isMissionExpired ? "Cette mission est terminée" :
                alreadyApplied ? "Vous avez déjà candidaté à cette mission" :
                !kycStatus?.validated ? "Votre dossier doit être validé pour candidater" : ""
              }
            >
              {alreadyApplied ? "Déjà candidaté" : "Candidater"}
            </button>
          </div>

        </div>
      </div>

      <button className="pq-back-bottom" onClick={() => navigate(-1)}>
        &lt; Retour
      </button>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <div className="modal-icon-wrapper">
              <img src={checkVert} alt="Confirm" className="modal-icon-img" />
            </div>

            <h3 className="modal-text">
              Souhaitez-vous confirmer votre choix <br/> pour cette mission ?
            </h3>

            <div className="modal-actions">
              <button className="modal-btn" onClick={handleConfirmApplication}>
                Valider
              </button>
              <button className="modal-btn" onClick={() => setShowConfirm(false)}>
                Annuler
              </button>
            </div>

          </div>
        </div>
      )}

      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon-wrapper">
              <img src={checkVert} alt="Success" className="modal-icon-img" />
            </div>
            <p className="modal-text" style={{ fontSize: '1.2rem' }}>
              Votre candidature a été envoyée avec succès.
            </p>
            <div className="modal-actions">
               <button className="modal-btn" onClick={() => setShowSuccess(false)}>
                 OK
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PqProfile;