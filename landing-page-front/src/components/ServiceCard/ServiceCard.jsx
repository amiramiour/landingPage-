import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
import universityLogo from "../../assets/university-default.png";
const formatDateFR = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
const ServiceCard = ({
  id,
  photo,
  fullName,
  training,
  description,
  school,
  date,
}) => {
  return (
    <Link to={`/profile-etudiant/${id}`} className="service-card">

      {/* PHOTO ÉTUDIANT */}
      <img src={photo} alt={fullName} className="service-card-image" />

      {/* NOM + FORMATION */}
      <div className="service-card-content">
        <h3>{fullName}</h3>
        <span className="service-training">{training}</span>
        <p>{description}</p>
      </div>

      {/* FOOTER */}
      <div className="service-card-footer">
  <img
    src={universityLogo}
    alt={school}
    className="category-icon"
  />

  <div className="service-meta-info">
    <span className="category">{school}</span>
    <span className="date">{formatDateFR(date)}</span>
  </div>
</div>


    </Link>
  );
};

export default ServiceCard;
