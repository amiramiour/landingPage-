import React, { useState, useRef, useEffect } from "react";
import "./ProfileEntreprise.css";
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaCamera,
} from "react-icons/fa";
import lockIcon from "../../assets/locked.png";
import lineIcon from "../../assets/line.png";

function ProfileEntreprise() {
  const [profil, setProfil] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [documents, setDocuments] = useState({
    extraitKbis: false,
    attestationUrssaf: false,
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
      nomEntreprise: user.companyName,
      typeEntreprise: user.companyType,
      siret: user.companyId,
      telephone: user.phone,
      adresse: user.address,
      photo: user.photoUrl
      ? `${import.meta.env.VITE_API_URL}/${user.photoUrl}`
      : `${import.meta.env.VITE_API_URL}/uploads/default-avatar.png`,
    });
  }, []);

  /* ================= UPLOAD PHOTO ================= */
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("photo", file);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/upload-photo`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error);

    const stored = JSON.parse(localStorage.getItem("user"));
    stored.photoUrl = data.photoUrl;
    localStorage.setItem("user", JSON.stringify(stored));

    setProfil((prev) => ({
      ...prev,
      photo: `${import.meta.env.VITE_API_URL}/${data.photoUrl}`,
    }));
  };

  /* ================= MODE ÉDITION ================= */
  const handleEdit = () => {
    setForm({
      companyName: profil.nomEntreprise,
      companyType: profil.typeEntreprise,
      companyId: profil.siret,
      phone: profil.telephone,
      address: profil.adresse,
    });
    setEditMode(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
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
      nomEntreprise: data.user.companyName,
      typeEntreprise: data.user.companyType,
      siret: data.user.companyId,
      telephone: data.user.phone,
      adresse: data.user.address,
      photo: data.user.photoUrl
  ? `${import.meta.env.VITE_API_URL}/${data.user.photoUrl}`
  : `${import.meta.env.VITE_API_URL}/uploads/default-avatar.png`,
    });

    setEditMode(false);
  };

  if (!profil) {
    return <p style={{ textAlign: "center" }}>Chargement du profil…</p>;
  }

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
            <img src={profil.photo} alt="profil" className="profil-photo" />
            <div className="photo-overlay">
              <FaCamera />
            </div>
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
                <input
                  value={form.companyName}
                  onChange={(e) =>
                    setForm({ ...form, companyName: e.target.value })
                  }
                  placeholder="Nom de l’entreprise"
                />
                <input
                  value={form.companyType}
                  onChange={(e) =>
                    setForm({ ...form, companyType: e.target.value })
                  }
                  placeholder="Type d’entreprise"
                />
                <input
                  value={form.companyId}
                  onChange={(e) =>
                    setForm({ ...form, companyId: e.target.value })
                  }
                  placeholder="SIRET"
                />
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Téléphone"
                />
                <input
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  placeholder="Adresse"
                />
              </>
            ) : (
              <>
                <p><strong>Entreprise </strong>{profil.nomEntreprise}</p>
                <p><strong>Type </strong>{profil.typeEntreprise}</p>
                <p><strong>SIRET </strong>{profil.siret}</p>
                <p><strong>Téléphone </strong>{profil.telephone}</p>
                <p><strong>Adresse </strong>{profil.adresse}</p>
              </>
            )}
          </div>

          {editMode ? (
            <div className="edit-actions">
              <button className="btn-primary" onClick={handleSave}>
                Enregistrer
              </button>
              <button
                className="btn-outline"
                onClick={() => setEditMode(false)}
              >
                Annuler
              </button>
            </div>
          ) : (
            <button className="btn-modifier" onClick={handleEdit}>
              Modifier
            </button>
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
            <p>Le dossier a été soumis avec succès </p>
            <button className="btn-ok" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProfileEntreprise;
