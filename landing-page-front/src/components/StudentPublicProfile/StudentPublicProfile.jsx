import React, { useEffect, useState } from "react";
import "./StudentPublicProfile.css";
import { Link, useParams } from "react-router-dom";
const DEFAULT_MISSIONS = [
  "🎓 Missions liées à la formation",
  "🧠 Missions qualifiées",
  "📚 Missions polyvalentes",
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
    return <p style={{ textAlign: "center" }}>Chargement du profil…</p>;
  }
  const missions =
  student.profile?.missions_recherchees &&
  student.profile.missions_recherchees.length > 0
    ? student.profile.missions_recherchees
    : DEFAULT_MISSIONS;


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
  {missions.map((mission, index) => (
    <li key={index}>{mission.startsWith("🎓") ? mission : ` ${mission}`}</li>
  ))}
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
