import React, { useState, useRef, useEffect } from "react";
import "./ProfileEtudiant.css";
import { FaCheckCircle, FaCloudUploadAlt, FaCamera } from "react-icons/fa";

import lockIcon from "../../assets/locked.png";
import lineIcon from "../../assets/line.png";

import iconBlue from "../../assets/checkblue.png";
import iconYellow from "../../assets/checkjaune.png";
import iconRed from "../../assets/refusrouge.png";
import iconGreen from "../../assets/checkvert.png";

/* ================= MAPPING FRONT ↔ BACK ================= */
const DOC_TYPE_MAP = {
  photoIdentite: "photo_identite",
  titreSejour: "titre_sejour",
  certificatScolarite: "certificat_scolarite",
  diplomeEtudes: "diplome",
  rib: "rib",
  justificatifDomicile: "justificatif_domicile",
  charteEngagement: "charte_engagement",
};

const DOC_TYPE_REVERSE = Object.fromEntries(
  Object.entries(DOC_TYPE_MAP).map(([k, v]) => [v, k])
);

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

  const [kycStatus, setKycStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [studentProfile, setStudentProfile] = useState(null);
  const [editExtra, setEditExtra] = useState(false);
  const [extraForm, setExtraForm] = useState(null);
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
      formation: user.training,
      etablissement: user.school,
      photo: user.photoUrl
        ? `http://localhost:3000/${user.photoUrl}`
        : "http://localhost:3000/uploads/default-avatar.png",
    });
  }, []);
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch("http://localhost:3000/student-profile/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      if (!res.ok) throw new Error("Erreur chargement profil étudiant");
      return res.json();
    })
    .then(data => {
      setStudentProfile(data);
    })
    .catch(err => {
      console.error("StudentProfile error:", err);
    });
}, []);

  /* ================= KYC STATUS ================= */
const loadKycStatus = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const res = await fetch("http://localhost:3000/documents/kyc-status", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    console.warn("KYC status non accessible");
    return;
  }

  const data = await res.json();
  setKycStatus(data);
};


  useEffect(() => {
    loadKycStatus();
  }, []);

  /* ================= DOCUMENTS EXISTANTS ================= */
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch("http://localhost:3000/documents/my", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    })
    .then((docs) => {
      if (!Array.isArray(docs)) return;

      const freshState = {
        photoIdentite: false,
        titreSejour: false,
        certificatScolarite: false,
        diplomeEtudes: false,
        rib: false,
        justificatifDomicile: false,
        charteEngagement: false,
      };

      docs.forEach((doc) => {
        const key = DOC_TYPE_REVERSE[doc.docType];
        if (key && doc.fileUrl) {
          freshState[key] = true;
        }
      });

      setDocuments(freshState);
    })
    .catch(() => {
      console.warn("Impossible de charger les documents (auth)");
    });
}, [kycStatus]); // 



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
      formation: data.user.training,
      etablissement: data.user.school,
      photo: `http://localhost:3000/${data.user.photoUrl}`,
    });

    setEditMode(false);
  };

  /* ================= UPLOAD DOCUMENT ================= */
  const handleDocumentUpload = async (frontKey, file) => {
    if (!file) return;

    const token = localStorage.getItem("token");
    const docType = DOC_TYPE_MAP[frontKey];

const presign = await fetch(
  `http://localhost:3000/documents/presigned-url?type=${docType}`,
  { headers: { Authorization: `Bearer ${token}` } }
);

if (!presign.ok) {
  alert("Session expirée, reconnecte-toi");
  return;
}

const { uploadUrl, s3Key } = await presign.json();


const uploadRes = await fetch(uploadUrl, {
  method: "PUT",
  headers: { "Content-Type": file.type },
  body: file,
});

if (!uploadRes.ok) {
  alert("Erreur upload S3");
  return;
}

const confirmRes = await fetch("http://localhost:3000/documents/confirm", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ type: docType, s3Key }),
});

if (!confirmRes.ok) {
  alert("Erreur confirmation document");
  return;
}


   

    setDocuments((prev) => ({ ...prev, [frontKey]: true }));
    loadKycStatus();
  };

  /* ================= SUBMIT ================= */
 const handleSubmit = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

const res = await fetch("http://localhost:3000/documents/submit", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

if (!res.ok) {
  alert("Impossible de soumettre le dossier");
  return;
}

await loadKycStatus();
setShowModal(true);

};

  if (!profil) return null;

const ALL_DOC_KEYS = Object.keys(documents);

const canSubmit =
  kycStatus &&
  !kycStatus.validated &&
  !kycStatus.inReview;



const missions =
  typeof studentProfile?.missions_recherchees === "string"
    ? studentProfile.missions_recherchees
        .split(/\n|,/)
        .map(m => m.trim())
        .filter(Boolean)
    : [];


  /* ================= RENDER ================= */
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
                <input value={form.training} onChange={(e) => setForm({ ...form, training: e.target.value })} />
                <input value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} />
              </>
            ) : (
              <>
                <p><strong>Nom </strong>{profil.nom}</p>
                <p><strong>Prénom </strong>{profil.prenom}</p>
                <p><strong>Téléphone </strong>{profil.telephone}</p>
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

        {/* ===== DOSSIER ===== */}
        <div className="dossier-card">
          <h2>Dépôt de dossier d’inscription</h2>

          <ul className="dossier-liste">
            {Object.keys(documents).map((key, i) => {
              const refused = kycStatus?.refusedDocs?.includes(DOC_TYPE_MAP[key]);
              const validated = kycStatus?.validatedDocs?.includes(
  DOC_TYPE_MAP[key]
);

const canUpload =
  !documents[key] || refused;


              return (
                <li key={i} className="dossier-item">
                  <div className="dossier-timeline">
                    <div className="dossier-circle"></div>
                    {i < 6 && <div className="dossier-line"></div>}
                  </div>

<div className="dossier-content">
  <span className="dossier-nom">
    {key.replace(/([A-Z])/g, " $1")}
  </span>

  {refused ? (
    <>
      <button
        className="btn-upload"
        onClick={() => fileInputs.current[key].click()}
      >
        <FaCloudUploadAlt /> Télécharger <span className="icon-refused">❗</span>
      </button>
      <input
        type="file"
        hidden
        ref={(el) => (fileInputs.current[key] = el)}
        onChange={(e) =>
          handleDocumentUpload(key, e.target.files[0])
        }
      />
    </>
  ) : documents[key] ? (
  <span className="uploaded-text">
    Téléchargé
    {validated && <FaCheckCircle className="icon-validated" />}
  </span>
) : (
    <>
      <button
        className="btn-upload"
        onClick={() => fileInputs.current[key].click()}
      >
        <FaCloudUploadAlt /> Télécharger
      </button>
      <input
        type="file"
        hidden
        ref={(el) => (fileInputs.current[key] = el)}
        onChange={(e) =>
          handleDocumentUpload(key, e.target.files[0])
        }
      />
    </>
  )}
</div>



                          </li>
                        );
                      })}
                    </ul>

          <button
            className={`btn-soumettre ${canSubmit ? "active" : ""}`}
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            Soumettre
          </button>
        </div>
      </div>
      {studentProfile && (
          <div className="profile-extra-section">

            {/* COLONNE GAUCHE */}
            <div className="profile-extra-left">
                <h3>Mes compétences</h3>

              <div className="profile-box">
              {editExtra ? (
                <textarea
                  className="profile-textarea"
                  value={extraForm.competences}
                  onChange={(e) =>
                    setExtraForm({ ...extraForm, competences: e.target.value })
                  }
                />
              ) : (
                <p className="profile-text">
                  {studentProfile.competences || "—"}
                </p>
              )}
            </div>
                        <h3>Missions recherchées</h3>
                        <div className="profile-box">
  {editExtra ? (
    <textarea
      className="profile-textarea"
      value={extraForm.missions}
      placeholder={`Exemple :
Support technique
Développement web`}
      onChange={(e) =>
        setExtraForm({ ...extraForm, missions: e.target.value })
      }
    />
  ) : (
    <ul className="profile-list no-bullets">
      {missions.length
        ? missions.map((m, i) => <li key={i}>{m}</li>)
        : <li>—</li>}
    </ul>
  )}
</div>

            </div>

            {/* COLONNE DROITE */}
            <div className="profile-extra-right">
                <h3>Mes disponibilités</h3>

              <div className="profile-box">

                <table className="dispo-table">
                  <thead>
                    <tr>
                      <th>Jours</th>
                      <th>9h-12h</th>
                      <th>12h-15h</th>
                      <th>15h-18h</th>
                    </tr>
                  </thead>
                  <tbody>
{Object.entries(editExtra
    ? extraForm?.disponibilites || {}
    : studentProfile?.disponibilites || {})
  .map(([day, slots]) => (
    <tr key={day}>
      <td>{day}</td>
      {Object.entries(slots).map(([slot, value]) => (
        <td key={slot}>
          {editExtra ? (
            <input
              type="checkbox"
              checked={value}
              onChange={() => {
                setExtraForm(prev => ({
                  ...prev,
                  disponibilites: {
                    ...prev.disponibilites,
                    [day]: {
                      ...prev.disponibilites[day],
                      [slot]: !value,
                    },
                  },
                }));
              }}
            />
          ) : (
            <span className={value ? "box-checked" : "box-empty"} />
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>
                </table>
              </div>

{/* ACTIONS */}
{!editExtra ? (
  <button
    className="btn-modifier-dispo"
    onClick={() => {
      setExtraForm({
        competences: studentProfile.competences || "",
        missions: studentProfile.missions_recherchees || "",
        disponibilites: JSON.parse(
          JSON.stringify(studentProfile.disponibilites || {})
        ),
      });
      setEditExtra(true);
    }}
  >
    Modifier
  </button>
) : (
  <div className="edit-actions-inline">
    <button
      className="btn-modifier-dispo btn-cancel"
      onClick={() => setEditExtra(false)}
    >
      Annuler
    </button>

    <button
      className="btn-modifier-dispo btn-save"
      onClick={async () => {
        const token = localStorage.getItem("token");

        await fetch("http://localhost:3000/student-profile/me", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            competences: extraForm.competences,
            missions_recherchees: extraForm.missions,
            disponibilites: extraForm.disponibilites,
          }),
        });

        setStudentProfile({
          ...studentProfile,
          competences: extraForm.competences,
          missions_recherchees: extraForm.missions,
          disponibilites: extraForm.disponibilites,
        });

        setEditExtra(false);
      }}
    >
      Enregistrer
    </button>
  </div>
)}
            </div>
          </div>
      )}

      {/* ================= TIMELINE ================= */}
      <div className="timeline-etapes">
        {[
          { title: "Dépôt du dossier", ok: kycStatus?.deposited, date: kycStatus?.depositedAt, icon: iconBlue },
          { title: "Etude du dossier", ok: kycStatus?.inReview, date: kycStatus?.reviewStartedAt, icon: iconYellow },
          {
            title: "Prise de décision",
            ok: kycStatus?.validated || kycStatus?.refused,
            date: kycStatus?.decisionAt,
            icon: kycStatus?.validated ? iconGreen : iconRed,
          },
        ].map((step, i) => (
          <React.Fragment key={i}>
            <div className="etape">
              <div className="icone-etape">
                <img src={step.ok ? step.icon : lockIcon} className="icone-lock-img" />
              </div>
              <p>{step.title}</p>
              {step.ok && step.date && (
                <small>{new Date(step.date).toLocaleDateString()}</small>
              )}
            </div>
            {i < 2 && <img src={lineIcon} className="ligne-etape-img" />}
          </React.Fragment>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FaCheckCircle className="modal-icon" />
            <p>Le dossier a été soumis avec succès</p>
            <button className="btn-ok" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileEtudiant;