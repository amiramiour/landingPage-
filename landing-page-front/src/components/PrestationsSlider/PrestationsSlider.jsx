import React, { useState } from "react";
import "./PrestationsSlider.css";

import PrestaCard from "../PrestatinQualifis/PrestaCard";
import PrestaCardGen from "../SevGenEtud/PrestaCardGen";

// flèches
import arrowLeftGreen from "../../assets/ButtonVgauche.png";
import arrowRightGreen from "../../assets/ButtonVdroite.png";
import arrowLeftYellow from "../../assets/Buttongauche.png";
import arrowRightYellow from "../../assets/Buttondroite.png";

// images
import imgExpertise from "../../assets/Techniciensinformatique.jpeg";
import imgGenerales from "../../assets/Animateur interculturel.jpeg";

const PrestationsSlider = ({ theme, missions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!missions || missions.length === 0) return null;

  const arrowLeft = theme === "green" ? arrowLeftGreen : arrowLeftYellow;
  const arrowRight = theme === "green" ? arrowRightGreen : arrowRightYellow;
  const imgToUse = theme === "yellow" ? imgExpertise : imgGenerales;

  const len = missions.length;

  const visible =
    len > 3
      ? [
          missions[currentIndex],
          missions[(currentIndex + 1) % len],
          missions[(currentIndex + 2) % len],
        ]
      : missions;

  const arrowsEnabled = len > 3;

  const handlePrev = () => {
    if (!arrowsEnabled) return;
    setCurrentIndex((prev) => (prev - 1 + len) % len);
  };

  const handleNext = () => {
    if (!arrowsEnabled) return;
    setCurrentIndex((prev) => (prev + 1) % len);
  };

  return (
    <div className="prestas-container">

      {/* GRID */}
      <div className="prestas-grid-fixed">
        {visible.map((mission) =>
          mission.type === "mission_d_expertise" ? (
            <PrestaCard
              key={mission.id}
              id={mission.id}                 // ✅ AJOUT CRITIQUE
              image={imgToUse}
              type="MISSION D’EXPERTISE"
              date={mission.startDate?.slice(0, 10) || "--"}
              title={mission.title}
              description={mission.description}
            />
          ) : (
            <PrestaCardGen
              key={mission.id}
              id={mission.id}                 //  AJOUT CRITIQUE
              image={imgToUse}
              type="MISSION DE SERVICE"
              date={mission.startDate?.slice(0, 10) || "--"}
              title={mission.title}
              description={mission.description}
            />
          )
        )}
      </div>

      {/* NAVIGATION — RESTAURÉE */}
      {len >= 1 && (
        <div className="prestas-navigation">
          <img
            src={arrowLeft}
            className={`nav-button-img ${arrowsEnabled ? "" : "disabled"}`}
            onClick={handlePrev}
          />
          <img
            src={arrowRight}
            className={`nav-button-img ${arrowsEnabled ? "" : "disabled"}`}
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};

export default PrestationsSlider;
