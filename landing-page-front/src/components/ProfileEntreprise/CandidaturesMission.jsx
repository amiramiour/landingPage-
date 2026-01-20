import { useEffect, useState } from "react";
import "./CandidaturesMission.css";
import acceptIcon from "../../assets/accept.png";
import refuseIcon from "../../assets/refus.png";
import schoolLogo from "../../assets/icon.png";
import { useAuth } from "../context/AuthContext";

function CandidaturesMission({ missionId }) {
  const { token } = useAuth();
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/candidatures/mission/${missionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setCandidatures)
      .catch(console.error);
  }, [missionId, token]);

  const updateStatus = (id, action) => {
    fetch(`http://localhost:3000/api/candidatures/${action}/${id}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }).then(() =>
      setCandidatures(prev =>
        prev.map(c =>
          c.id === id ? { ...c, status: action === "accept" ? "accepted" : "rejected" } : c
        )
      )
    );
  };

  return (
    <div className="candidatures-mission">
      {candidatures.map(({ id, student, createdAt }) => (
        <div key={id} className="candidat-row">

          <img
            src={`http://localhost:3000/${student.photoUrl}`}
            className="candidat-avatar"
          />

          <div className="candidat-info">
            <h4 className="candidat-name">
              {student.firstName} {student.lastName}
            </h4>

            <p className="candidat-formation">{student.training}</p>

            <div className="candidat-footer">
              <img src={schoolLogo} className="school-logo" />
              <div className="school-info">
                <span className="school-name">{student.school}</span>
                <span className="candidat-date">
                  {new Date(createdAt).toLocaleDateString("fr-FR")}
                </span>
              </div>
            </div>

            <div className="candidat-actions">
              <img
                src={acceptIcon}
                className="action-icon accept"
                onClick={() => updateStatus(id, "accept")}
              />
              <img
                src={refuseIcon}
                className="action-icon refuse"
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
