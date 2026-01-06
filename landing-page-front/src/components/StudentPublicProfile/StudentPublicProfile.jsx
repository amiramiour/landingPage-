import React, { useEffect, useState } from "react";
import "./StudentPublicProfile.css";
import { Link, useParams } from "react-router-dom";

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
    return <p style={{ textAlign: "center" }}>Chargement du profil…</p>;
  }

  return (
    <div className="pe-container">
      <div className="pe-profile">
        {/* PHOTO */}
        <div className="pe-image-wrapper">
          <img
            src={`http://localhost:3000/${student.photoUrl}`}
            alt={`${student.firstName} ${student.lastName}`}
            className="pe-image"
            onError={(e) => {
              e.target.src = "/uploads/default-avatar.png";
            }}
          />
        </div>

        {/* INFOS */}
        <div className="pe-info">
          <h2 className="pe-name">
            {student.firstName} {student.lastName}
          </h2>

          <p>
            <strong>Domaine :</strong> {student.field || "—"}
          </p>

          <p>
            <strong>Formation :</strong> {student.training || "—"}
          </p>

          <p>
            <strong>Établissement :</strong> {student.school || "—"}
          </p>

          <h2 className="pe-missions-title">Missions recherchées :</h2>
          <ul className="pe-missions">
            <li>🎓 Missions liées à la formation</li>
            <li>🧠 Missions qualifiées</li>
            <li>📚 Missions polyvalentes</li>
          </ul>

          <button className="pe-btn">Contacter</button>
        </div>
      </div>

      <Link to="/" className="pe-back">
        &lt; Retour
      </Link>
    </div>
  );
};

export default StudentPublicProfile;
