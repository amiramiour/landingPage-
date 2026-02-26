import { useEffect, useState } from "react";
import "../TeamDirectory/TeamDirectory.css";
import { useAuth } from "../context/AuthContext";

function CandidatsEntreprise() {
  const { token } = useAuth();
  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/company`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        const uniques = new Map();

        data.forEach(c => {
          uniques.set(c.student.id, {
            ...c.student,
            missionTitle: c.mission.title,
          });
        });

        setCandidats([...uniques.values()]);
      })
      .catch(console.error);
  }, [token]);

  return (
    <section className="team-directory">
      <h2 className="team-directory__title">
        ÉTUDIANTS AYANT CANDIDATÉ
      </h2>

      <div className="team-directory__grid">
        {candidats.length === 0 && (
          <p style={{ textAlign: "center", color: "#666" }}>
            Aucun étudiant pour le moment
          </p>
        )}

        {candidats.map(student => (
          <div key={student.id} className="team-member">
            <img
              src={`${import.meta.env.VITE_API_URL}/${student.photoUrl}`}
              className="team-member__image"
              alt={student.firstName}
              onError={(e) => {
                e.target.src = "/uploads/default-avatar.png";
              }}
            />

            <h3 className="team-member__name">
              {student.firstName} {student.lastName}
            </h3>

            <p className="team-member__title">
              {student.training || "—"}
            </p>

            <small className="team-member__mission">
              Mission : {student.missionTitle}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CandidatsEntreprise;
