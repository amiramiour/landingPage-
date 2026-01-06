import React, { useState, useRef, useEffect } from "react";
import "./ProfileEntreprise.css";
import { FaCheckCircle, FaCloudUploadAlt, FaLock } from "react-icons/fa";
import lockIcon from "../../assets/locked.png";
import lineIcon from "../../assets/line.png";

function ProfileEntreprise() {
  const [profil, setProfil] = useState(null);
  const [documents, setDocuments] = useState({
  extraitKbis: false,
  attestationUrssaf: false,
  charteEngagement: false,
});


  const [showModal, setShowModal] = useState(false);
  const fileInputs = useRef({});
  const fileInputRef = useRef();

  const allUploaded = Object.values(documents).every((v) => v);

  // Charger l'utilisateur depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);

      setProfil({
        nomEntreprise: user.companyName,
  typeEntreprise: user.companyType,
  siret: user.siret,
  telephone: user.phone,
  adresse: user.address,
        photo: user.photoUrl
          ? `http://localhost:3000/${user.photoUrl}`
          : "http://localhost:3000/uploads/default-avatar.png",
      });
    }
  }, []);

  // Upload photo
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await fetch("http://localhost:3000/auth/upload-photo", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Erreur upload photo : " + data.error);
        return;
      }

      // Mise à jour localStorage
      const stored = JSON.parse(localStorage.getItem("user"));
      stored.photoUrl = data.photoUrl;
      localStorage.setItem("user", JSON.stringify(stored));

      // Mise à jour du visuel
      setProfil((prev) => ({
        ...prev,
        photo: `http://localhost:3000/${data.photoUrl}`,
      }));
    } catch (err) {
      console.error(err);
      alert("Erreur serveur pendant l’upload.");
    }
  };

  if (!profil) return <p style={{ textAlign: "center" }}>Chargement du profil...</p>;

  return (
    <div className="profile-page">

      <div className="top-section">

        {/* ----- PROFIL ----- */}
        <div className="profil-card">
          <img src={profil.photo} alt="profil" className="profil-photo" />

          {/* Bouton changer la photo */}
          <button 
            className="btn-modifier-photo"
            onClick={() => fileInputRef.current.click()}
          >
            Changer la photo
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />

          <h2 className="profil-titre">Profil</h2>

          <div className="profil-info">
  <p><strong>Entreprise </strong>{profil.nomEntreprise}</p>
  <p><strong>Type </strong>{profil.typeEntreprise}</p>
  <p><strong>SIRET </strong>{profil.siret}</p>
  <p><strong>Téléphone </strong>{profil.telephone}</p>
  <p><strong>Adresse </strong>{profil.adresse}</p>
</div>


          {/* Bouton modifier infos */}
          <button className="btn-modifier">Modifier</button>
        </div>

        {/* ----- DOSSIER DÉPÔT ----- */}
        <div className="dossier-card">
          <h2>Dépôt de dossier d’inscription</h2>

          <ul className="dossier-liste">
            {Object.keys(documents).map((key, i) => (
              <li key={i} className="dossier-item">

                <div className="dossier-timeline">
                  <div className="dossier-circle"></div>
                  {i < Object.keys(documents).length - 1 && (
                    <div className="dossier-line"></div>
                  )}
                </div>

                <div className="dossier-content">
                  <span className="dossier-nom">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase())}
                  </span>

                  {documents[key] ? (
                    <FaCheckCircle className="icon-check" />
                  ) : (
                    <>
                      <button className="btn-upload" onClick={() => fileInputs.current[key].click()}>
                        <FaCloudUploadAlt /> Télécharger
                      </button>

                      <input
                        type="file"
                        ref={(el) => (fileInputs.current[key] = el)}
                        style={{ display: "none" }}
                        onChange={() => setDocuments((prev) => ({ ...prev, [key]: true }))}
                      />
                    </>
                  )}
                </div>

              </li>
            ))}
          </ul>

          <button
            className={`btn-soumettre ${allUploaded ? "active" : ""}`}
            disabled={!allUploaded}
            onClick={() => setShowModal(true)}
          >
            Soumettre
          </button>
        </div>
      </div>

      {/* ----- SUIVI ----- */}
      <div className="timeline-etapes">
        {["Dépôt du dossier", "Etude du dossier", "Prise de décision"].map((txt, i) => (
          <React.Fragment key={i}>
            <div className="etape locked">
              <div className="icone-etape">
<img src={lockIcon} alt="locked" className="icone-lock-img" />
              </div>
              <p>{txt}</p>
            </div>
                  {i < 2 && (
                    <img 
                      src={lineIcon} 
                      alt="line" 
                      className="ligne-etape-img"
                    />
                  )}
          </React.Fragment>
        ))}
      </div>

      {/* ----- MODAL ----- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FaCheckCircle className="modal-icon" />
            <p>Le dossier a été soumis avec succès 🎉</p>
            <button className="btn-ok" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProfileEntreprise;
