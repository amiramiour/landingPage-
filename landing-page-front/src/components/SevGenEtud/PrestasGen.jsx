import React from 'react';
import PrestaCardGen from './PrestaCardGen';
import './PrestasGen.css';

const PrestasGen = ({ missions }) => {
  if (!missions || missions.length === 0) {
    return <p style={{ textAlign: "center" }}>Aucune mission disponible</p>;
  }

  return (
    <div className="prestas-container">
      <div className="prestas-grid">
        {missions
          .filter(m => m.type === "mission_de_service")
          .map(mission => (
            <PrestaCardGen
              key={mission.id}
              id={mission.id}               // ✅ CRITIQUE
              image="/images/default-mission.jpg"
              type="MISSION DE SERVICE"
              date={mission.startDate?.slice(0, 10) || "--"}
              title={mission.title}
              description={mission.description}
            />
          ))}
      </div>
    </div>
  );
};

export default PrestasGen;
