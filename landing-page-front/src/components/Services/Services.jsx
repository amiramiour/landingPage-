//Services.jsx
import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import tech from '../../assets/Techniciensinformatique.jpeg'; // Import du logo
import soutien from '../../assets/Cours de soutien de langueetrangere.jpeg'; // Import du logo
import community from '../../assets/CommunityManagermultilingue.jpeg'; // Import du logo
import conseiller from '../../assets/Conseillerclienteleinternationale.jpeg'; // Import du logo

const servicesData = [
  {
    title: 'Techniciens informatique',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Freelance Informatique',
    date: '11 DEC 2024',
    icon: tech,
  },
  {
    title: 'Cours de soutien de langue étrangère',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Comptabilité',
    date: '05 DEC 2024',
    icon: soutien,
  },
  {
    title: 'Community Manager multilingue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Community',
    date: '30 NOV 2024',
    icon: community,
  },
  {
    title: 'Conseiller commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Diplomatie',
    date: '27 NOV 2024',
    icon: conseiller,
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>PRESTATIONS QUALIFIES</h2>
        <p className="services-description">
          Pour les missions requérant des compétences techniques ou un savoir certifié.
        </p>
        <button className="voir-plus">Voir plus</button>
      </div>
      <div className="services-scroll">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;