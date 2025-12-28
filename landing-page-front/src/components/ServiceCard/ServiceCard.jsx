import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ id, title, description, icon, category, date }) => {
  return (
    <Link to={`/prestationsqualifiee/${id}`} className="service-card">

      {/* IMAGE */}
      <img src={icon} alt={title} className="service-card-image" />

      {/* TYPE (comme linky-service-type) */}
      <div className="service-type">
        MISSIONS D’EXPERTISE
      </div>

      {/* CONTENU */}
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* FOOTER */}
      <div className="service-card-footer">
        <img src={icon} alt={category} className="category-icon" />

        <div className="service-meta-info">
          <span className="category">{category}</span>
          <span className="date">{date}</span>
        </div>
      </div>

    </Link>
  );
};

export default ServiceCard;
