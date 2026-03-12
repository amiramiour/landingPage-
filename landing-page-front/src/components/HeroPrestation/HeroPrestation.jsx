import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./HeroPrestation.css";

import logoHero from "../../assets/Logo_linkyjob_Blanc.png";
import bgQualifie from "../../assets/prqBg.jpg";
import bgGeneral from "../../assets/prnqBg.jpg";

const HeroPrestation = () => {
  const scrollToPrestations = () => {
  const section = document.getElementById("prestations-list");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  const { pathname } = useLocation();

  const isQualifie = pathname.includes("prestationsqualifiee");

  //  PARAMÈTRES DYNAMIQUES
  const titleColor = isQualifie ? "#FFEB64" : "#7FD8B1";
  const bgImage = isQualifie ? bgQualifie : bgGeneral;

  const secondTitle = isQualifie
    ? "Missions d'expertise"
    : "Prestations Générales";

  const buttonLink = isQualifie
    ? "/prestationsqualifiee/details"
    : "/prestationsgenerales/details";

  const buttonColor = isQualifie ? "#FFEB64" : "#7FD8B1";

  return (
    <div
      className="hero-presta-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`
      }}
    >
      <div className="hero-presta">
        <img src={logoHero} alt="LINKYJOB Logo" className="hero-presta-logo" />

        <h1 className="hero-presta-title">
          <div className="hero-presta-line">
            <span className="hero-presta-text-white">Découvrez nos </span>
            <span className="hero-presta-text-colored" style={{ color: titleColor }}>
              {secondTitle}
            </span>
          </div>
        </h1>

        <button
          onClick={scrollToPrestations}
          className="hero-presta-button"
          style={{ backgroundColor: buttonColor }}
        >
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default HeroPrestation;
