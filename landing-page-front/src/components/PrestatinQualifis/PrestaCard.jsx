import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrestaCard.css';

const PrestaCard = ({ id, image, type, date, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/prestationsqualifiee/${id}`);
  };

  return (
    <div className="presta-card" onClick={handleClick}>
      <img src={image} alt={title} className="presta-card-image" />
      <div className="presta-card-content">
        <div className="presta-card-header">
          <span className="presta-card-type yellow">{type}</span>
          <span className="presta-card-date">{date}</span>
        </div>

        <h3 className="presta-card-title">{title}</h3>
        <p className="presta-card-description">{description}</p>

        <span className="presta-card-link">Lire plus &gt;</span>
      </div>
    </div>
  );
};

export default PrestaCard;
