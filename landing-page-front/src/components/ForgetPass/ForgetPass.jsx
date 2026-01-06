import React, { useState } from 'react';
import './ForgetPass.css';
import LogoLogin from '../../assets/logo_linkyjob.png';

const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Logique d'envoi ici
  };

  return (
    <div className="forgetpass-container">
      <div className="fp-decorative-lines">
  <div className="fp-line fp-line-yellow"><div className="fp-circle fp-circle-yellow"></div></div>
  <div className="fp-line fp-line-blue"><div className="fp-circle fp-circle-blue"></div></div>
  <div className="fp-line fp-line-orange"><div className="fp-circle fp-circle-orange"></div></div>
  <div className="fp-line fp-line-teal"><div className="fp-circle fp-circle-teal"></div></div>
</div>


      <div className="forgetpass-wrapper">
        <div className="logo-container">
          <img src={LogoLogin} alt="Logo LinkyJob" className="lf-logo" />
        </div>

        <div className="forgetpass-form">
          <h2 className="forgetpass-title">Mot de passe oublié</h2>
          <p className="forgetpass-subtitle">
            Saisissez votre adresse mail pour réinitialiser votre mot de passe.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Adresse mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>

          <a href="/login" className="back-link">‹ Retour</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
