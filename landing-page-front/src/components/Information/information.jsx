import React, { useEffect, useRef } from 'react';
import './information.css';
import calque1 from '../../assets/Calque1.png';
import calque2 from '../../assets/Calque2.png';
import calque3 from '../../assets/Calque3.png';

const Information = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const infoData = [
    {
      id: 1,
      title: (
        <>
          Plus de <span className="highlight-blue">400 000 étudiants</span><br />
          <span className="highlight-blue">internationaux</span> en France
        </>
      ),
      text: (
        <>
          Le nombre d’étudiants internationaux en France a augmenté de{' '}
          <strong>8 %</strong> en <strong>2021-2022</strong>, dépassant les{' '}
          <strong>400 000</strong>.
        </>
      ),
      image: calque1,
      reverse: true,
    },
    {
      id: 2,
      title: (
        <>
          Plus de <span className="highlight-orange">100 profils vérifiés</span>
        </>
      ),
      text: (
        <>
          Échange direct avec les intervenants pour répondre à vos attentes,
          <strong> votre planning </strong> et
          <strong> votre budget</strong>.
        </>
      ),
      image: calque2,
      reverse: false,
    },
    {
      id: 3,
      title: (
        <>
          Un <span className="highlight-blue">paiement rapide et sécurisé</span>
        </>
      ),
      text: (
        <>
          Payez votre intervenant <strong>facilement</strong> et en toute{' '}
          <strong>sécurité</strong> directement sur la plateforme.
        </>
      ),
      image: calque3,
      reverse: true,
    },
  ];

  return (
    <div className="information-container">
      {infoData.map((info, index) => (
        <div
          key={info.id}
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
            <img src={info.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;