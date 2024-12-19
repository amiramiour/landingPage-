import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, category, date }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-meta">
        <span className="category">{category}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default ServiceCard;