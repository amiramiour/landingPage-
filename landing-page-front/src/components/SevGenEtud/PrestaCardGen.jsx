import React from 'react';
import './PrestaCardGen.css';

const PrestaCardGen = ({ image, type, date, title, description }) => {
  return (
    <div className="presta-card">
      <img src={image} alt={title} className="presta-card-image" />
      <div className="presta-card-content">
        <div className="presta-card-header">
          <span className="presta-card-type yellow1">
            {type}
          </span>
          <span className="presta-card-date">{date}</span>
        </div>
        <h3 className="presta-card-title">{title}</h3>
        <p className="presta-card-description">{description}</p>
        <a href="#details" className="presta-card-link">Lire plus &gt;</a>
      </div>
    </div>
  );
};

export default PrestaCardGen;
