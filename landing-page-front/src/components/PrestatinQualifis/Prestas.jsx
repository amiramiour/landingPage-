import React from 'react';
import PrestaCard from './PrestaCard';
import './Prestas.css';

const Prestas = ({ missions }) => {
  if (!missions || missions.length === 0) {
    return <p style={{ textAlign: "center" }}>Aucune mission disponible</p>;
  }

  return (
    <div className="prestas-container">
      <h2 className="prestas-title">ESPACE ÉTUDIANT</h2>

      <div className="prestas-grid">
        {missions
          .filter(m => m.type === "mission_d_expertise")
          .map(mission => (
            <PrestaCard
              key={mission.id}
              id={mission.id}                       // ✅ CRITIQUE
              image="/images/default-mission.jpg"  // image fallback
              type="MISSION D’EXPERTISE"
              date={mission.startDate?.slice(0, 10) || "--"}
              title={mission.title}
              description={mission.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Prestas;
