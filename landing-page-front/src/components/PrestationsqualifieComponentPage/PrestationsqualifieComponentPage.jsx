import React from 'react';
import { Clock, Calendar, User, ChevronRight } from 'lucide-react';
import './PrestationsqualifieComponentPage.css';
import icon from '../../assets/icon.png';
import { Link } from 'react-router-dom'; 
const services = [
  {
    id: 1,
    title: 'Techniciens informatique',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...',
    fullName: 'Full name',
    date: '11 Jan 2022',
    time: '5 min read',
  },
  {
    id: 2,
    title: 'Cours de soutien de langue étrangère',
    image: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...',
    fullName: 'Full name',
    date: '11 Jan 2022',
    time: '5 min read',
  },
  {
    id: 3,
    title: 'Community Manager multilingue',
    image: 'https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...',
    fullName: 'Full name',
    date: '11 Jan 2022',
    time: '5 min read',
  },
  {
    id: 4,
    title: 'Conseiller clientèle international',
    image: 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...',
    fullName: 'Full name',
    date: '11 Jan 2022',
    time: '5 min read',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/prestationsqualifiee/${service.id}`} className="pq-service-card-link">
      <div className="pq-service-card">
        <div className="pq-image-wrapper">
          <img src={service.image} alt={service.title} className="pq-image" />
        </div>
        <div className="pq-content">
          <span className="pq-service-label">Service qualifié</span>
          <h3 className="pq-title">{service.title}</h3>
          <p className="pq-description">{service.description}</p>
          <div className="pq-meta-global">
            <img src={icon} alt="User Icon" className="pq-user-icon" />
            <div className="pq-meta-text">
              <div className="pq-user-name">{service.fullName}</div>
              <div className="pq-meta-info-simple">
                <span>{service.date}</span> • <span>{service.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

function PrestationsqualifieComponentPage() {
  return (
    <div className="pq-section">
      <div className="pq-container">
        <div className="pq-header">
          <div className="pq-line"></div>
          <h1 className="pq-main-title">MISSIONS D'EXPERTISE</h1>
          <p className="pq-subtitle">
            Pour les missions requérant des compétences techniques ou un savoir certifié.
          </p>
        </div>

        <div className="pq-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="pq-cta">
          <button className="pq-btn">
            Voir plus <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrestationsqualifieComponentPage;