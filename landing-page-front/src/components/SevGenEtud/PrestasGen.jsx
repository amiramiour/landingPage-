import React, { useState, useEffect } from 'react';
import PrestaCardGen from './PrestaCardGen';
import './PrestasGen.css';

const PrestasGen = ({ missions }) => {
  const [appliedMissions, setAppliedMissions] = useState([]);
  console.log("appliedMissions:", appliedMissions);
  useEffect(() => {
      console.log("appliedMissions:", appliedMissions);

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) return;

    const user = JSON.parse(storedUser);
    if (user.role !== "student") return;

    fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const missionIds = data
          .filter(c => c.status !== "rejected")
          .map(c => c.missionId);

        setAppliedMissions(missionIds);
      })
      .catch(() => {});
  }, []);

  if (!missions || missions.length === 0) {
    return <p style={{ textAlign: "center" }}>Aucune mission disponible</p>;
  }

  return (
    <div className="prestas-container">
      <div className="prestas-grid">
        {missions
          .filter(m => m.type === "mission_de_service")
          .map(mission => {
            const alreadyApplied = appliedMissions.includes(mission.id);

            return (
              <PrestaCardGen
                key={mission.id}
                id={mission.id}
                image="/images/default-mission.jpg"
                type="MISSION DE SERVICE"
                date={mission.startDate?.slice(0, 10) || "--"}
                title={mission.title}
                description={mission.description}
                alreadyApplied={alreadyApplied}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PrestasGen;
