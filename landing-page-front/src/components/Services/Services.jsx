import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const servicesData = [
  {
    title: 'Techniciens informatique',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Freelance Informatique',
    date: '11 DEC 2024',
    icon: '/src/assets/tech-icon.png'
  },
  {
    title: 'Cours de soutien de langue étrangère',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Comptabilité',
    date: '05 DEC 2024',
    icon: '/src/assets/language-icon.png'
  },
  {
    title: 'Community Manager multilingue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Community',
    date: '30 NOV 2024',
    icon: '/src/assets/community-icon.png'
  }
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>PRESTATIONS QUALIFIES</h2>
        <p className="services-description">
          Pour les missions requérant des compétences techniques ou un savoir certifié.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <button className="voir-plus">Voir plus</button>
    </section>
  );
};

export default Services;