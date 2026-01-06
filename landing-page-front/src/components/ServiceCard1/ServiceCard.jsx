import React from "react";
import "./ServiceCard.css";
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
  title,
  description,
  icon,
  companyLogo,
  companyName,
  date,
  type,
}) => {
  return (
    <div className="linky-service-card">

      {/* IMAGE MISSION */}
      <img src={icon} alt={title} className="linky-service-card-image" />

      {/* TYPE DE MISSION (SOUS IMAGE) */}
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

      {/* FOOTER ENTREPRISE */}
      <div className="linky-service-footer">
        <img
          src={icon}
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
