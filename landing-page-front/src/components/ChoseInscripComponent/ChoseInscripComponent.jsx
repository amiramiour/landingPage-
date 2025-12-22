import React from 'react';
import './ChoseInscripComponent.css';
import LogoLogin from '../../assets/logo_linkyjob.png';
import { Link } from 'react-router-dom';
const ChoseInscripComponent = () => {
  return (
    <div className="choseInscripComponent-container">
      <div className="choseInsc-wrapper">
        <div className="logo-container">
          <img src={LogoLogin} alt="Logo LinkyJob" className="lf-logo" />

        </div>

        <div className="choseInsc-form">

        <Link to="/registerStudent" className="choseInsc-btn1">Je suis un étudiant</Link>
        <Link to="/registerEntreprise" className="choseInsc-btn2">Je suis une entreprise</Link>

          <a href="/login" className="back-link">‹ Retour</a>
        </div>
      </div>
    </div>
  );
};

export default ChoseInscripComponent;
