import React from "react";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

const formatDateFR = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const ServiceCard1 = ({
  id,
  title,
  description,
  icon,
  companyLogo,
  companyName,
  date,
  type,
  alreadyApplied,
  hasActiveMission,
  isBlocked
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isBlocked) return; 
    navigate(`/prestationsqualifiee/${id}`);
  };

  return (
    <div
      className={`linky-service-card ${alreadyApplied ? "applied" : ""}`}
      onClick={handleClick}
      style={{ cursor: isBlocked  ? "default" : "pointer" }}
    >

      {/* BANDEAU SI DÉJÀ CANDIDATÉ */}
      {alreadyApplied && !hasActiveMission && (
        <div className="applied-banner">
          Une candidature a déjà été déposée
        </div>
      )}
      {hasActiveMission && (
  <div className="applied-banner">
    Vous avez déjà une mission en cours
  </div>
)}

      {/* IMAGE */}
      <img src={icon} alt={title} className="linky-service-card-image" />

      {/* TYPE */}
      <div
        className={`linky-service-type ${
          type === "mission_d_expertise" ? "expertise" : "service"
        }`}
      >
        {type === "mission_d_expertise"
          ? "Mission d’expertise"
          : "Mission de service"}
      </div>

      {/* CONTENU */}
      <div className="linky-service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* FOOTER */}
      <div className="linky-service-footer">
        <img
          src={companyLogo}
          alt={companyName}
          className="linky-company-logo"
        />

        <div className="linky-company-info">
          <span className="linky-company-name">{companyName}</span>
          <span className="linky-date">{formatDateFR(date)}</span>
        </div>
      </div>

    </div>
  );
};

export default ServiceCard1;