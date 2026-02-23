import React, { useState, useEffect } from 'react';
import './AvisClient.css';

const AvisClient = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //  Charger les avis depuis l'API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:3000/feedback");
        const data = await res.json();

        const formatted = data.map((item) => ({
          id: item.id,
          rating: item.note,
          text: `"${item.message}"`,
          author: `${item.prenom} ${item.nom}`,
          role:
            item.typeProfil === "etudiant"
              ? "Étudiant"
              : item.typeProfil === "entreprise"
              ? "Entreprise"
              : "Particulier",
          avatar:
            item.typeProfil === "entreprise"
              ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              : "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        }));

        setReviews(formatted);
      } catch (err) {
        console.error("Erreur chargement avis:", err);
      }
    };

    fetchReviews();
  }, []);

  const nextSlide = () => {
    if (reviews.length < 2) return;
    setCurrentIndex((prev) =>
      prev + 1 >= reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (reviews.length < 2) return;
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 2 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'active' : 'inactive'}`}>
        ★
      </span>
    ));
  };

  if (reviews.length === 0) {
    return null; 
  }

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
              <img
                src={review.avatar}
                alt={review.author}
                className="profile-avatar"
              />
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
          {Array.from({ length: Math.max(reviews.length - 1, 0) }).map((_, i) => (
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