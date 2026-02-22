
import React, { useEffect, useState } from "react";
import "./StudentPublicProfile.css";
import { Link, useParams } from "react-router-dom";

const DEFAULT_MISSIONS = [
  "Conception architecturale",
  "Modélisation 2D/3D et élaboration de plans",
  "Assistance aux études techniques et suivi de projets.",
];

const StudentPublicProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.data || data);
      })
      .catch((err) =>
        console.error("Erreur chargement profil étudiant :", err)
      );
  }, [id]);

  if (!student) {
    return <p style={{ textAlign: "center", padding: "5rem" }}>Chargement du profil…</p>;
  }

  const profile = student.studentProfile;

  /* =========================
     MISSIONS
  ========================== */
  const rawMissions = profile?.missions_recherchees;
  let missions = DEFAULT_MISSIONS;

  if (rawMissions) {
    try {
      const parsed = JSON.parse(rawMissions);
      if (Array.isArray(parsed)) {
        missions = parsed;
      } else if (typeof parsed === "string") {
        missions = parsed.split("\n").filter(Boolean);
      }
    } catch {
      missions = rawMissions.split("\n").filter(Boolean);
    }
  }

  /* =========================
     DISPONIBILITÉS
  ========================== */
  let disponibilites = [];
  if (profile?.disponibilites) {
    try {
      const parsed = JSON.parse(profile.disponibilites);
      Object.entries(parsed).forEach(([day, slots]) => {
        Object.entries(slots).forEach(([slot, value]) => {
          if (value) {
            disponibilites.push(`${day} de ${slot}`);
          }
        });
      });
    } catch {}
  }

  return (
    <div className="pe-container">
      <div className="pe-profile">

        {/* COLONNE GAUCHE : PHOTO */}
        <div className="pe-left-col">
          <div className="pe-image-wrapper">
            <img
              src={`http://localhost:3000/${student.photoUrl}`}
              alt={`${student.firstName} ${student.lastName}`}
              className="pe-image"
              onError={(e) => {
                e.target.src = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
              }}
            />
          </div>
        </div>

        {/* COLONNE DROITE : INFOS */}
        <div className="pe-info">
          <h1 className="pe-name">
            {student.firstName} {student.lastName}
          </h1>

          <div className="pe-details-block">
            <p><strong>Âge :</strong> {student.age || "24"} ans</p>
            <p><strong>Nationalité :</strong> {profile?.nationalites || "Japonaise"}</p>
            <p><strong>Langues :</strong> {profile?.langues_parlees || "Japonais(natif), Français (B2), Anglais (C1)"}</p>
            <p><strong>Formation :</strong> {student.training || "Master 1 en architecture"}</p>
            <p><strong>Etablissement de formation :</strong> {student.school || "École Nationale Supérieure d'Architecture"}</p>
          </div>

          <div className="pe-section">
            <h2 className="pe-section-title">Mission recherchée :</h2>
            <div className="pe-list-content">
              {missions.map((mission, index) => (
                <p key={index}>{mission}</p>
              ))}
            </div>
          </div>

          <div className="pe-section">
            <h2 className="pe-section-title">Compétences :</h2>
            <p className="pe-text-content">
              {profile?.competences || "Conception architecturale, AutoCAD, Revit, SketchUp, réglementation du bâtiment, travail en équipe, rigueur."}
            </p>
          </div>

          <div className="pe-section">
            <h2 className="pe-section-title">Disponibilité :</h2>
            <div className="pe-list-content">
              {disponibilites.length > 0 ? (
                disponibilites.map((d, index) => (
                  <p key={index}>{d}</p>
                ))
              ) : (
                <>
                  <p>Mardi de 9h-12h</p>
                  <p>Vendredi 15h-18h</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pe-actions">
        <button className="pe-btn-contacter">Contacter</button>
      </div>

      <Link to="/" className="pe-back">
        &lt; Retour
      </Link>
    </div>
  );
};

export default StudentPublicProfile;
