import { useEffect, useState } from "react";
import "../TeamDirectory/TeamDirectory.css";
import { useAuth } from "../context/AuthContext";

function CandidatsEntreprise() {
  const { token } = useAuth();
  const [candidats, setCandidats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/candidatures/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        const uniques = new Map();
        data.forEach(c => uniques.set(c.student.id, c.student));
        setCandidats([...uniques.values()]);
      });
  }, [token]);

  return (
    <section className="team-directory">
      <h2 className="team-directory__title">ÉTUDIANTS AYANT CANDIDATÉ</h2>

      <div className="team-directory__grid">
        {candidats.map(student => (
          <div key={student.id} className="team-member">
            <img
              src={`http://localhost:3000/${student.photoUrl}`}
              className="team-member__image"
            />
            <h3 className="team-member__name">
              {student.firstName} {student.lastName}
            </h3>
            <p className="team-member__title">{student.training}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CandidatsEntreprise;
