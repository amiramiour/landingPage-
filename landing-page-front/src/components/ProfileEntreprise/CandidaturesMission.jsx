import { useEffect, useState } from "react";
import "./CandidaturesMission.css";
import acceptIcon from "../../assets/accept.png";
import refuseIcon from "../../assets/refus.png";
import schoolLogo from "../../assets/icon.png";
import { useAuth } from "../context/AuthContext";
import StudentCandidatureProfile from "../CandidaturesMission/StudentCandidatureProfile";

function CandidaturesMission({ missionId, mission }) {
    const { token, user } = useAuth();

  const [candidatures, setCandidatures] = useState([]);
  const [selectedCandidature, setSelectedCandidature] = useState(null);

  /* ================= CHARGEMENT CANDIDATURES ================= */
  useEffect(() => {
    fetch(`http://localhost:3000/api/candidatures/mission/${missionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setCandidatures)
      .catch(console.error);
  }, [missionId, token]);

  /* ================= UPDATE STATUS ================= */
  const updateStatus = (id, action) => {
    fetch(`http://localhost:3000/api/candidatures/${action}/${id}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      setCandidatures((prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, status: action === "accept" ? "accepted" : "rejected" }
            : c
        )
      );
      setSelectedCandidature(null);
    });
  };

  /* ================= PAGE PROFIL CANDIDAT ================= */
  if (selectedCandidature) {
    return (
      <StudentCandidatureProfile
        student={selectedCandidature.student}
        candidatureId={selectedCandidature.id}
        mission={{
          title: mission?.title || "—",
          companyName: mission?.employer?.companyName || user.companyName,
        }}

        onAccept={updateStatus}
        onReject={updateStatus}
        onBack={() => setSelectedCandidature(null)}
      />
    );
  }

  /* ================= LISTE DES CANDIDATS ================= */
  return (
    <div className="candidatures-mission">
      {candidatures.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          Aucune candidature pour cette mission
        </p>
      )}

      {candidatures.map(({ id, student, createdAt, status, mission }) => (
        <div
          key={id}
          className="candidat-row"
          onClick={() =>
            setSelectedCandidature({ id, student, mission })
          }
        >
          <img
            src={`http://localhost:3000/${student.photoUrl}`}
            className="candidat-avatar"
            alt={student.firstName}
            onError={(e) => {
              e.target.src = "/uploads/default-avatar.png";
            }}
          />

          <div className="candidat-info">
            <h4 className="candidat-name">
              {student.firstName} {student.lastName}
            </h4>

            <p className="candidat-formation">
              {student.training || "—"}
            </p>

            <div className="candidat-footer">
              <img src={schoolLogo} className="school-logo" />

              <div className="school-info">
                <span className="school-name">
                  {student.school || "—"}
                </span>

                <span className="candidat-date">
                  {new Date(createdAt).toLocaleDateString("fr-FR")}
                </span>
              </div>
            </div>

            {/* ACTIONS RAPIDES */}
            <div
              className="candidat-actions"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={acceptIcon}
                className={`action-icon accept ${
                  status === "accepted" ? "disabled" : ""
                }`}
                onClick={() => updateStatus(id, "accept")}
              />

              <img
                src={refuseIcon}
                className={`action-icon refuse ${
                  status === "rejected" ? "disabled" : ""
                }`}
                onClick={() => updateStatus(id, "reject")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidaturesMission;
