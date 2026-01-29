import React, { useEffect, useRef } from 'react';
import './information.css';
import commeImage from './comme.png';
import searchImage from './search.png';
import securiteImage from './securite.png';

const Information = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // animation une seule fois
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const infoData = [
    {
      title: (
        <>
          <span>Plus de </span>
          <span className="highlight">400 000 étudiants</span><br />
          <span className="highlight">internationaux</span> en France
        </>
      ),
      text: (
        <>
          Le nombre d’étudiants internationaux en France a augmenté de{' '}
          <span className="black-text">8 %</span> en{' '}
          <span className="black-text">2021-2022</span>, dépassant les{' '}
          <span className="black-text">400 000</span>.
        </>
      ),
      image: commeImage,
      reverse: false,
    },
    {
      title: (
        <>
          Plus de <span className="highlights">1 000 000</span> profils{' '}
          <span className="highlights">vérifiés</span>
        </>
      ),
      text: (
        <>
          Échange direct avec les intervenants pour répondre à vos attentes,
          <span className="black-text"> votre planning </span> et
          <span className="black-text"> votre budget </span>.
        </>
      ),
      image: searchImage,
      reverse: true,
    },
    {
      title: (
        <>
          Un <span className="highlight1">paiement rapide</span> et{' '}
          <span className="highlight1">sécurisé</span>
        </>
      ),
      text: (
        <>
          Payez votre intervenant{' '}
          <span className="black-text">facilement</span> et en toute{' '}
          <span className="black-text">sécurité</span>, directement sur la plateforme
        </>
      ),
      image: securiteImage,
      reverse: false,
    },
  ];

  return (
    <div className="information-container">
      {infoData.map((info, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`information-item
            ${info.reverse ? 'reverse' : ''}
            ${index % 2 === 0 ? 'from-right' : 'from-left'}
          `}
        >
          <div className="information-text">
            <h2>{info.title}</h2>
            <p>{info.text}</p>
          </div>

          <div className="information-image">
            <img src={info.image} alt={`Image ${index + 1}`} className="image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
