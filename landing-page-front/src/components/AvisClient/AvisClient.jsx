import React, { useState } from 'react';
import './AvisClient.css';

const reviews = [
  {
    id: 1,
    rating: 4,
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    author: 'Wade Warren',
    role: 'Etudiant en Informatique',
    avatar: 'https://i.pravatar.cc/150?u=wade'
  },
  {
    id: 2,
    rating: 3,
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    author: 'General Technologie',
    role: 'Entreprise spécialisée en informatique',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=GT'
  },
  {
    id: 3,
    rating: 3,
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    author: 'Jenny Wilson',
    role: 'Etudiante en Design',
    avatar: 'https://i.pravatar.cc/150?u=jenny'
  },
  {
    id: 4,
    rating: 5,
    text: '"Une plateforme exceptionnelle qui facilite réellement la mise en relation entre étudiants et startups. Un gain de temps précieux pour nos projets."',
    author: 'Guy Hawkins',
    role: 'CEO chez InnovateCorp',
    avatar: 'https://i.pravatar.cc/150?u=guy'
  }
];

const AvisClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 2 : prev - 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'active' : 'inactive'}`}>
        ★
      </span>
    ));
  };

 return (
    <section className="avis-section">
      <div 
        className="avis-container" 
        style={{ transform: `translateX(-${currentIndex * (40 + 2.4)}%)` }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="avis-card">
            <div className="card-top">
              <div className="stars-container">
                {renderStars(review.rating)}
              </div>
              <p className="avis-text">{review.text}</p>
            </div>
            
            <div className="profile-section">
              <img src={review.avatar} alt={review.author} className="profile-avatar" />
              <div className="profile-info">
                <h4>{review.author}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="avis-controls">
        <div className="pagination-dots">
          {Array.from({ length: reviews.length - 1 }).map((_, i) => (
            <div 
              key={i} 
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={prevSlide} aria-label="Précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          <button className="nav-btn" onClick={nextSlide} aria-label="Suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvisClient;