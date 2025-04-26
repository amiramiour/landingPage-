import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ id, title, description, icon, category, date }) => {
  return (
    <Link to={`/prestationsqualifiee/${id}`} className="service-card">
      <img src={icon} alt={title} className="service-card-image" />
      <div className="service-qualifies">Service qualifiés</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-meta">
        <div className="category-container">
          <img src={icon} alt={category} className="category-icon" />
          <span className="category">{category}</span>
        </div>
        <span className="date">{date}</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
