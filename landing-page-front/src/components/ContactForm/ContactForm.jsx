import React, { useState } from 'react';
import './ContactForm.css';
import LogoContact from '../../assets/logo_linkyjob.png';

function ContactForm() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [message, setMessage] = useState('');
  const [accepteConditions, setAccepteConditions] = useState(false);
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        sujet,
        message,
        accepteConditions,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Erreur");
    }

    alert("Message envoyé avec succès !");
    setNom("");
    setPrenom("");
    setMessage("");
    setEmail("");
    setAccepteConditions(false);

  } catch (err) {
    alert("Erreur : " + err.message);
  }
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="cf-form-group">
        <label>Sujet</label>
        <select
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          className="cf-form-input"
        >
          <option value="">Choisir un sujet</option>
          <option value="Support technique">Support technique</option>
          <option value="Problème paiement">Problème paiement</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Autre">Autre</option>
        </select>
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
