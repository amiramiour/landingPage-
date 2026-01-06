import React, { useState } from 'react';
import PrestaCard from './PrestaCard';
import './Prestas.css';
import tech from '../../assets/Techniciensinformatique.jpeg';
import CommunityManagermultilingue from '../../assets/CommunityManagermultilingue.jpeg';
import Cours from '../../assets/Cours de soutien de langueetrangere.jpeg';

const Prestas = () => {
  const prestas = [
    {
      image: tech,
      type: 'MISSION D’EXPERTISE',
      date: '11 DEC 2024',
      title: 'Techniciens informatique',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image: CommunityManagermultilingue,
      type: 'MISSION D’EXPERTISE',
      date: '05 DEC 2024',
      title: 'Community Manager multilingue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image: Cours,
      type: 'MISSION D’EXPERTISE',
      date: '30 NOV 2024',
      title: 'Cours de soutien langue étrangère',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prestas.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === prestas.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="prestas-container">
      <h2 className="prestas-title">ESPACE ETUDIANT</h2>
      <div className="prestas-filters">
        <button className="filter-button active">Tous</button>
        <a href="#" className="filter-link">MISSIONS D’EXPERTISE</a>
        <a href="#" className="filter-link">MISSIONS DE SERVICE</a>
      </div>

      <div className="prestas-grid">
        {prestas.map((presta, index) => (
          <PrestaCard
            key={index}
            image={presta.image}
            type={presta.type}
            date={presta.date}
            title={presta.title}
            description={presta.description}
          />
        ))}
      </div>

      <div className="prestas-navigation">
        <button className="nav-button" onClick={handlePrev}>
          ←
        </button>
        <button className="nav-button" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Prestas;
