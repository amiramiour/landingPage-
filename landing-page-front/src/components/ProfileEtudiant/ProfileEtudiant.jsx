import React, { useState, useRef } from "react";
import "./ProfileEtudiant.css";
import { FaCheckCircle, FaCloudUploadAlt, FaLock } from "react-icons/fa";
import profilPhoto from "../../assets/Assistant export.png";

function ProfileEtudiant() {
  const profil = {
    nom: "LARBI",
    prenom: "Nadir",
    dateNaissance: "01/01/2001",
    age: 22,
    telephone: "0653479834",
    domaine: "Informatique",
    formation: "Licence 3 en Informatique",
    etablissement: "Université Paris 13",
    localisation: "Paris, France",
    photo: profilPhoto,
  };

  const documentsInitiaux = {
    photoIdentite: false,
    titreSejour: false,
    certificatScolarite: false,
    diplomeEtudes: false,
    rib: false,
    justificatifDomicile: false,
    choixPrestations: false,
    charteEngagement: false,
  };

  const [documents, setDocuments] = useState(documentsInitiaux);
  const [showModal, setShowModal] = useState(false);
  const fileInputs = useRef({});
  const allUploaded = Object.values(documents).every((v) => v);

  const handleFileChange = (key) =>
    setDocuments((prev) => ({ ...prev, [key]: true }));

  const handleUploadClick = (key) => fileInputs.current[key].click();

  const handleSubmit = () => {
    if (allUploaded) setShowModal(true);
  };

  const [etapes] = useState({
    depot: true,
    etude: false,
    decision: false,
  });

  return (
    <div className="profile-page">
      {/* Partie haute : profil + dépôt */}
      <div className="top-section">
        {/* ---- Profil ---- */}
        <div className="profil-card">
          <img src={profil.photo} alt="profil" className="profil-photo" />
          <h2 className="profil-titre">Profil</h2>
          <div className="profil-info">
            <p><strong>Nom :</strong> {profil.nom}</p>
            <p><strong>Prénom :</strong> {profil.prenom}</p>
            <p><strong>Date de naissance :</strong> {profil.dateNaissance}</p>
            <p><strong>Âge :</strong> {profil.age} ans</p>
            <p><strong>Téléphone :</strong> {profil.telephone}</p>
            <p><strong>Domaine d’études :</strong> {profil.domaine}</p>
            <p><strong>Formation :</strong> {profil.formation}</p>
            <p><strong>Établissement :</strong> {profil.etablissement}</p>
            <p><strong>Localisation :</strong> {profil.localisation}</p>
          </div>
          <button className="btn-modifier">Modifier</button>
        </div>

        {/* ---- Dépôt de dossier ---- */}
        <div className="dossier-card">
          <h2>Dépôt de dossier d’inscription</h2>
<ul className="dossier-liste timeline-verticale">
    {Object.keys(documentsInitiaux).map((key, i) => (
      <li key={i} className="dossier-item">
        {/* Timeline visuelle à gauche */}
        <div className="dossier-timeline">
          <div className="dossier-circle"></div>
          {i !== Object.keys(documentsInitiaux).length - 1 && (
            <div className="dossier-line"></div>
          )}
        </div>

        {/* Contenu du document à droite */}
        <div className="dossier-content">
          <span className="dossier-nom">
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (c) => c.toUpperCase())}
          </span>

          {documents[key] ? (
            <FaCheckCircle className="icon-check" />
          ) : (
            <>
              <button
                className="btn-upload"
                onClick={() => handleUploadClick(key)}
              >
                <FaCloudUploadAlt /> Télécharger
              </button>
              <input
                type="file"
                ref={(el) => (fileInputs.current[key] = el)}
                style={{ display: "none" }}
                onChange={() => handleFileChange(key)}
              />
            </>
          )}
        </div>
      </li>
    ))}
            </ul>


          <button
            className={`btn-soumettre ${allUploaded ? "active" : ""}`}
            onClick={handleSubmit}
            disabled={!allUploaded}
          >
            Soumettre
          </button>
        </div>
      </div>

      {/* ---- Suivi ---- */}
      <div className="suivi-card">
        <h2>Suivi de la demande</h2>
        <div className="timeline">
          <div className={`etape ${etapes.depot ? "active" : ""}`}>
            <FaCheckCircle />
            <p>Dépôt du dossier</p>
            {etapes.depot && <small>01/01/2026</small>}
          </div>
          <div className={`etape ${etapes.etude ? "active" : ""}`}>
            <FaLock />
            <p>Étude du dossier</p>
          </div>
          <div className={`etape ${etapes.decision ? "active" : ""}`}>
            <FaLock />
            <p>Prise de décision</p>
          </div>
        </div>
      </div>

      {/* ---- Modal ---- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FaCheckCircle className="modal-icon" />
            <p>Le dossier a été soumis avec succès 🎉</p>
            <button className="btn-ok" onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileEtudiant;
