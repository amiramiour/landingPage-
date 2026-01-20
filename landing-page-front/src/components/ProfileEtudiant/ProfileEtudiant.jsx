import React, { useState, useRef, useEffect } from "react";
import "./ProfileEtudiant.css";
import { FaCheckCircle, FaCloudUploadAlt, FaCamera } from "react-icons/fa";
import lockIcon from "../../assets/locked.png";
import lineIcon from "../../assets/line.png";

function ProfileEtudiant() {
  const [profil, setProfil] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [documents, setDocuments] = useState({
    photoIdentite: false,
    titreSejour: false,
    certificatScolarite: false,
    diplomeEtudes: false,
    rib: false,
    justificatifDomicile: false,
    charteEngagement: false,
  });

  const [showModal, setShowModal] = useState(false);
  const fileInputs = useRef({});
  const fileInputRef = useRef(null);

  const allUploaded = Object.values(documents).every(Boolean);

  /* ================= CHARGEMENT PROFIL ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    const user = JSON.parse(storedUser);

    setProfil({
      nom: user.lastName,
      prenom: user.firstName,
      telephone: user.phone,
      domaine: user.field,
      formation: user.training,
      etablissement: user.school,
      photo: user.photoUrl
        ? `http://localhost:3000/${user.photoUrl}`
        : "http://localhost:3000/uploads/default-avatar.png",
    });
  }, []);

  /* ================= PHOTO ================= */
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("photo", file);

    const res = await fetch("http://localhost:3000/auth/upload-photo", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error);

    const stored = JSON.parse(localStorage.getItem("user"));
    stored.photoUrl = data.photoUrl;
    localStorage.setItem("user", JSON.stringify(stored));

    setProfil((prev) => ({
      ...prev,
      photo: `http://localhost:3000/${data.photoUrl}`,
    }));
  };

  /* ================= MODE ÉDITION ================= */
  const handleEdit = () => {
    setForm({
      firstName: profil.prenom,
      lastName: profil.nom,
      phone: profil.telephone,
      field: profil.domaine,
      training: profil.formation,
      school: profil.etablissement,
    });
    setEditMode(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error);

    localStorage.setItem("user", JSON.stringify(data.user));

    setProfil({
      nom: data.user.lastName,
      prenom: data.user.firstName,
      telephone: data.user.phone,
      domaine: data.user.field,
      formation: data.user.training,
      etablissement: data.user.school,
      photo: `http://localhost:3000/${data.user.photoUrl}`,
    });

    setEditMode(false);
  };

  if (!profil) return <p style={{ textAlign: "center" }}>Chargement…</p>;

  return (
    <div className="profile-page">
      <div className="top-section">

        {/* ================= PROFIL ================= */}
        <div className="profil-card">

          {/* PHOTO */}
          <div
            className="profil-photo-wrapper"
            onClick={() => fileInputRef.current.click()}
          >
            <img src={profil.photo} className="profil-photo" />
            <div className="photo-overlay"><FaCamera /></div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            hidden
          />

          <h2 className="profil-titre">Profil</h2>

          <div className="profil-info">
            {editMode ? (
              <>
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <input value={form.field} onChange={(e) => setForm({ ...form, field: e.target.value })} />
                <input value={form.training} onChange={(e) => setForm({ ...form, training: e.target.value })} />
                <input value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} />
              </>
            ) : (
              <>
                <p><strong>Nom </strong>{profil.nom}</p>
                <p><strong>Prénom </strong>{profil.prenom}</p>
                <p><strong>Téléphone </strong>{profil.telephone}</p>
                <p><strong>Domaine </strong>{profil.domaine}</p>
                <p><strong>Formation </strong>{profil.formation}</p>
                <p><strong>Établissement </strong>{profil.etablissement}</p>
              </>
            )}
          </div>

          {editMode ? (
            <div className="edit-actions">
              <button className="btn-primary" onClick={handleSave}>Enregistrer</button>
              <button className="btn-outline" onClick={() => setEditMode(false)}>Annuler</button>
            </div>
          ) : (
            <button className="btn-modifier" onClick={handleEdit}>Modifier</button>
          )}
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

export default ProfileEtudiant;
