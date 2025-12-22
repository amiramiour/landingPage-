import React from 'react';
import './ServiceCard.css';

const ServiceCard1 = ({ title, description, icon, category, date, type }) => {
  return (
    <div className="linky-service-card">
      <img src={icon} alt={title} className="linky-service-card-image" />

      {/* Badge dynamique */}
      <div className="linky-service-qualifies">
        {type === "mission_d_expertise"
          ? "Mission d’expertise"
          : "Mission de service"}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="linky-service-meta">
        <div className="linky-category-container">
          <img src={icon} alt={category} className="linky-category-icon" />
          <span className="linky-category">{category}</span>
        </div>
        <span className="linky-date">{date}</span>
      </div>
    </div>
  );
};

export default ServiceCard1;
