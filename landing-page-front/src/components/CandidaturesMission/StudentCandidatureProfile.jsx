import "../StudentPublicProfile/StudentPublicProfile.css";
import acceptIcon from "../../assets/accept.png";
import refuseIcon from "../../assets/refus.png";

function StudentCandidatureProfile({
  student,
  candidatureId,
  mission,
  onAccept,
  onReject,
  onBack,
}) {
  if (!student) return null;

  return (
    <div className="pe-container">
      <div className="pe-profile">
        {/* PHOTO */}
        <div className="pe-image-wrapper">
          <img
            src={`${import.meta.env.VITE_API_URL}/${student.photoUrl}`}
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
            <strong>Âge :</strong>{" "}
            {student.age ? `${student.age} ans` : "—"}
          </p>

          <p>
            <strong>Nationalité :</strong>{" "}
            {student.nationalite || "—"}
          </p>

          <p>
            <strong>Langues :</strong>{" "}
            {student.langues_parles || "—"}
          </p>

          <p>
            <strong>Formation :</strong>{" "}
            {student.school
              ? `${student.school} – ${student.training || ""}`
              : "—"}
          </p>

          <h2 className="pe-missions-title">Mission recherchée :</h2>
          <ul className="pe-missions">
            <li>🛠 {student.competences || "—"}</li>
          </ul>

          <h2 className="pe-missions-title">
            Candidature déposée pour la mission
          </h2>

          <p>
            <strong>{mission.title}</strong>
          </p>

          <p>
            {mission.companyName}
          </p>

          {/* ACTIONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "2.5rem",
            }}
          >
            <button
              onClick={() => onAccept(candidatureId, "accept")}
              style={{
                background: "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: "18px",
                padding: "0.7rem 2.2rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Accepter
            </button>

            <button
              onClick={() => onReject(candidatureId, "reject")}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "18px",
                padding: "0.7rem 2.2rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Refuser
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onBack}
        className="pe-back"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        &lt; Retour
      </button>
    </div>
  );
}

export default StudentCandidatureProfile;