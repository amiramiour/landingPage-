import React, { useEffect, useState } from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import "./TeamDirectory.css";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";

function TeamDirectory() {
  const [students, setStudents] = useState([]);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        const list = data.data || data;
        setStudents(list);
      })
      .catch((err) => console.error("Erreur chargement étudiants :", err));
  }, []);

  const visibleStudents = students.slice(0, limit);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 6);
  };

  return (
    <section className="team-directory">
      <div className="container">
        <h2 className="team-directory__title">ESPACE ENTREPRISE</h2>

        <div className="team-directory__grid">
          {visibleStudents.map((student) => (
            <Link
              to={`/profile/${student.id}`}
              key={student.id}
              className="team-member-link"
            >
              <div className="team-member">
                {/* PHOTO */}
                <div className="team-member__image-wrapper">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${student.photoUrl}`}
                    alt={`${student.firstName} ${student.lastName}`}
                    className="team-member__image"
                    onError={(e) => {
                      e.target.src = "/uploads/default-avatar.png";
                    }}
                  />
                </div>

                {/* NOM COMPLET */}
                <h3 className="team-member__name">
                  {student.firstName} {student.lastName}
                </h3>

                {/* FORMATION */}
                <p className="team-member__title">{student.training}</p>

                {/* DESCRIPTION FIXE */}
                <p className="team-member__description">
                  {DEFAULT_DESCRIPTION}
                </p>

                {/* SOCIAL (placeholder) */}
                <div className="team-member__social">
                  <span className="social-icon"><Linkedin size={18} /></span>
                  <span className="social-icon"><Twitter size={18} /></span>
                  <span className="social-icon"><Instagram size={18} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit < students.length && (
          <div className="team-directory__cta">
            <button
              className="team-directory__load-more"
              onClick={handleLoadMore}
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamDirectory;
