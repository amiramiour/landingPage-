import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Condition.css';

import logoImage from '../../assets/Logo_linkyjob_Blanc.png'; 
import logomain from './main.png';
import logoMajeur from './majeur.png';
import logopc from './pc.png';
import logotitre from './titre.png';

const Condition = () => {
  const navigate = useNavigate();

  const handleInscriptionClick = () => {
    navigate('/choseInscrip'); 
  };

  return (
    <div className="condition-container">
      <div className="condition-content-wrapper">
        
        <div className="left-content">
          <div className="title-large">
            Conditions <br />
            pour rejoindre
          </div>
          <img src={logoImage} alt="LINKYJOB" className="logoo-image" />
        </div>

        {/* Partie Droite : Liste + Bouton */}
        <div className="right-content">
          <h3>Pour nous rejoindre, il te faut remplir ces <br /> quelques conditions :</h3>
          
          <ul className="conditions-list">
            <li>
              <img src={logoMajeur} alt="Majeur" className="icon" />
              Être majeur
            </li>
            <li>
              <img src={logotitre} alt="Titre de séjour" className="icon" />
              Avoir un titre de séjour valide
            </li>
            <li>
              <img src={logopc} alt="pc" className="icon" />
              S’inscrire et rencontrer l’équipe LINKYJOB
            </li>
            <li>
              <img src={logomain} alt="main" className="icon" />
              Être suuuuuper motivé !
            </li>
          </ul>

          <button className="inscription-button" onClick={handleInscriptionClick}>
            Inscription
          </button>
        </div>

      </div>
    </div>
  );
};

export default Condition;