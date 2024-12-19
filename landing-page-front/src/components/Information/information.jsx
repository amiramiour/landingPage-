import React from 'react';
import './information.css';
import commeImage from './comme.png';
import searchImage from './search.png';
import securiteImage from './securite.png';

const Information = () => {
  const infoData = [
    {
        title: (
            <> 
            <span className="first-line">
            <span>Plus de </span>
              <span className="highlight">400 000 étudiants</span></span><br /><span className="second-line"> <span className="highlight">internationaux</span>  en France</span>
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
      image: commeImage,  // Utilisation de l'image importée
      reverse: false,     // Texte à gauche, image à droite
    },
    {
        title: (
            <> 
            <span>Plus de </span>
              <span className="highlights"> 1 000 000</span> profils  <span className="highlights"> vérifiés</span>
            </>
          ),

          text: (
            <>
              Échange direct avec les intervenants pour répondre 
              à vos attentes, {' '}
              <span className="black-text">votre planning </span> 
              et 
              <span className="black-text"> votre budget </span>, 
              
            </>
          ),
      image: searchImage,  // Utilisation de l'image importée
      reverse: true,      // Image à gauche, texte à droite
    },
    {
        title: (
            <> 
            <span>Un </span>
              <span className="highlight1">paiement rapide  </span>  et
              <span className="highlight1"> sécurisé </span> 
            </>
          ),
      
          text: (
            <>
              Payez votre intervenant {' '}
              <span className="black-text">Facilement </span> 
              et en toute 
              <span className="black-text"> sécurité </span>, directement sur la plateforme
              
            </>
          ),
      image: securiteImage,  // Utilisation de l'image importée
      reverse: false,     // Texte à gauche, image à droite
    },
  ];

  return (
    <div className="information-container">
      {infoData.map((info, index) => (
        <div key={index} className={`information-item ${info.reverse ? 'reverse' : ''}`}>
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
