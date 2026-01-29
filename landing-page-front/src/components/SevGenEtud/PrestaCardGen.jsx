import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrestaCardGen.css';

const PrestaCardGen = ({ id, image, type, date, title, description }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // empêche le #details
    if (!id) return;
    navigate(`/prestationsqualifiee/${id}`);
  };

  return (
    <div
      className="presta-card"
      onClick={handleClick}
      style={{ cursor: id ? 'pointer' : 'default' }}
    >
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

        {/* lien conservé visuellement */}
        <a
          href="#details"
          className="presta-card-link"
          onClick={handleClick}
        >
          Lire plus &gt;
        </a>
      </div>
    </div>
  );
};

export default PrestaCardGen;
