import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './GeneralServices.css';
import receptionist from '../../assets/recept.jpeg';
import Animateur from '../../assets/Animateur interculturel.jpeg';
import Assistant from '../../assets/Assistant relation.jpeg';
import Assistantexport from '../../assets/Assistant export.png';


const servicesData = [
  {
    title: 'Réceptionniste bilingue/trilingue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Office de tourisme en France',
    date: '15 DEC 2024',
    icon: receptionist,
  },
  {
    title: 'Animateur interculturel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'CDJ',
    date: '10 DEC 2024',
    icon: Animateur,
  },
  {
    title: 'Assistant relation client international',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Groupe valorlty',
    date: '07 DEC 2024',
    icon: Assistant,
  },
  {
    title: 'Assistant export',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Groupe valorlty',
    date: '03 DEC 2024',
    icon: Assistantexport,
  },
];

const GeneralServices = () => {
  return (
    <section className="services">
      <div className="services-header-section">
        <h2>PRESTATIONS GENERALES</h2>
        <p className="services-description-section">
          Pour les missions accessibles sans formation préalable ou expertise particulière.
        </p>
        <button className="voir-plus-section">Voir plus</button>
      </div>
      <div className="services-scroll-section">
        <div className="services-grid-section">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralServices;