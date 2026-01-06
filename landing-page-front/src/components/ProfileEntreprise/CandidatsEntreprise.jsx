import { Linkedin, Twitter, Instagram } from "lucide-react";
import "../TeamDirectory/TeamDirectory.css"; // 

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";

const candidats = [
  {
    id: 1,
    firstName: "Jenny",
    lastName: "Wilson",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
  {
    id: 2,
    firstName: "Annette",
    lastName: "Black",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
  {
    id: 3,
    firstName: "Bessie",
    lastName: "Cooper",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
  {
    id: 4,
    firstName: "Sihem",
    lastName: "Lakhdar",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
  {
    id: 5,
    firstName: "Nadir",
    lastName: "Larbi",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
  {
    id: 6,
    firstName: "Ronald",
    lastName: "Richards",
    training: "Job title",
    photoUrl: "/uploads/default-avatar.png",
  },
];

function CandidatsEntreprise() {
  return (
    <section className="team-directory">
      <div className="container">
        <h2 className="team-directory__title">
          ÉTUDIANTS AYANT CANDIDATÉ
        </h2>

        <div className="team-directory__grid">
          {candidats.map((student) => (
            <div key={student.id} className="team-member">
              {/* PHOTO */}
              <div className="team-member__image-wrapper">
                <img
                  src={student.photoUrl}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="team-member__image"
                />
              </div>

              {/* NOM */}
              <h3 className="team-member__name">
                {student.firstName} {student.lastName}
              </h3>

              {/* FORMATION */}
              <p className="team-member__title">{student.training}</p>

              {/* DESCRIPTION */}
              <p className="team-member__description">
                {DEFAULT_DESCRIPTION}
              </p>

              {/* SOCIAL */}
              <div className="team-member__social">
                <span className="social-icon"><Linkedin size={18} /></span>
                <span className="social-icon"><Twitter size={18} /></span>
                <span className="social-icon"><Instagram size={18} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CandidatsEntreprise;
