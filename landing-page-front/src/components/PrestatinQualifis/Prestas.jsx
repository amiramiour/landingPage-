import React from 'react';
import PrestaCard from './PrestaCard';
import './Prestas.css';
import tech from '../../assets/Techniciensinformatique.jpeg'; // Import du logo
import CommunityManagermultilingue from '../../assets/CommunityManagermultilingue.jpeg'; // Import du logo
import Cours from '../../assets/Cours de soutien de langueetrangere.jpeg'; // Import du logo


const Prestas = () => {
  const prestas = [
    {
      image: tech,
      type: 'Prestation qualifiés',
      date: '11 DEC 2024',
      title: 'Techniciens informatique',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      image: CommunityManagermultilingue,
      type: 'Service qualifiés',
      date: '05 DEC 2024',
      title: 'Community Manager multilingue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      image: Cours,
      type: 'Service qualifiés',
      date: '30 NOV 2024',
      title: 'Cours de soutien langue étrangère',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    }
  ];

  return (
    <div className="prestas-container">
      <h2 className="prestas-title">ESPACE ETUDIANT</h2>
      <div className="prestas-filters">
        <button className="filter-button active">Tous</button>
        <a href="#" className="filter-link">Prestations qualifiés</a>
        <a href="#" className="filter-link">Prestations générales</a>
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
    </div>
  );
};

export default Prestas;
