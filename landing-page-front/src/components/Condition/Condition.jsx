import React from 'react';
import './Condition.css';
import logoImage from './Linkyjob.png';
import logomain from './main.png';
import logoMajeur from './majeur.png';
import logopc from './pc.png';
import logotitre from './titre.png';

const Condition = () => {
  return (
    <div className="condition-container">
      <div className="left-content">
        <h3>Condition pour joindre</h3>
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
     
      
      

      <div className="right-content">
        <h3>Pour nous rejoindre, il te faut remplir ces conditions :</h3>
        <ul>
          <li>
            <img src={logoMajeur} alt="Majeur" className="icon" />
            Être majeur
          </li>
          <li>
            <img src={logotitre} alt="Titre de séjour" className="icon" />
            Avoir un titre de séjour valide
          </li>
          <li>
            <img src={logopc} alt="Titre de séjour" className="icon" />
            S’inscrire et rencontrer l’équipe LINKYJOB
          </li>
          <li>
            <img src={logomain} alt="Titre de séjour" className="icon" />
            Être suuuuuper motivé !
          </li>
        </ul>
        <button className="inscription-button">Inscription</button>
      </div>
    </div>
  );
};

export default Condition;
