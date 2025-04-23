import React, { useState } from 'react';
import './ContactForm.css';

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
    <div className="contact-container">
      {/* Lignes décoratives */}
      <div className="line-top-left"></div>
      <div className="line-top-right"></div>
      <div className="line-bottom-left"></div>
      <div className="line-bottom-right"></div>

      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        <textarea
          placeholder="Saisissez votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={accepteConditions}
            onChange={(e) => setAccepteConditions(e.target.checked)}
            required
          />
          <label>J'accepte les conditions</label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
