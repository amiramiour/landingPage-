import React, { useState } from 'react';
import PrestaCard from './PrestaCardGen';
import './PrestasGen.css';
import tech from '../../assets/Techniciensinformatique.jpeg';
import CommunityManagermultilingue from '../../assets/CommunityManagermultilingue.jpeg';
import Cours from '../../assets/Cours de soutien de langueetrangere.jpeg';

const PrestasGen = () => {
  const prestas = [
    {
      image: tech,
      type: 'Service Générales',
      date: '15 DEC 2024',
      title: 'Réceptionniste bilingue/trilingue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image: CommunityManagermultilingue,
      type: 'Service Générales',
      date: '10 DEC 2024',
      title: 'Animateur interculturel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      image: Cours,
      type: 'Service Générales',
      date: '07 DEC 2024',
      title: 'Assistant relation client international',
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

      {/* Afficher les 3 divs */}
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

      {/* Ajouter les flèches en dessous */}
      <div className="prestas-navigation">
        <button className="nav-button1" onClick={handlePrev}>
          ←
        </button>
        <button className="nav-button1" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default PrestasGen;
