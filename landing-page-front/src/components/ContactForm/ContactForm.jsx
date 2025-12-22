import React, { useState } from 'react';
import './ContactForm.css';
import LogoContact from '../../assets/logo_linkyjob.png';

function ContactForm() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [message, setMessage] = useState('');
  const [accepteConditions, setAccepteConditions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', { nom, prenom, message, accepteConditions });
  };

  return (
    <div className="cf-container">
      <div className="cf-line cf-line-top-left"></div>
      <div className="cf-line cf-line-top-right"></div>
      <div className="cf-line cf-line-bottom-left"></div>
      <div className="cf-line cf-line-bottom-right"></div>

      <img src={LogoContact} alt="Logo LinkyJob" className="cf-logo" />

      <h1 className="cf-title">Contactez-nous</h1>

      <form onSubmit={handleSubmit} className="cf-form">
        <div className="cf-form-group">
          <label className="cf-form-label">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="cf-form-input"
          />
        </div>

        <div className="cf-form-group">
          <label className="cf-form-label">Prénom</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            className="cf-form-input"
          />
        </div>

        <div className="cf-form-group">
          <label className="cf-form-label">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="cf-form-textarea"
            placeholder="Saisissez votre message..."
          ></textarea>
        </div>

        <div className="cf-checkbox-container">
          <input
            type="checkbox"
            id="conditions"
            checked={accepteConditions}
            onChange={(e) => setAccepteConditions(e.target.checked)}
            required
            className="cf-checkbox"
          />
          <label htmlFor="conditions" className="cf-checkbox-label">
            J'accepte les conditions
          </label>
        </div>

        <button type="submit" className="cf-submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
