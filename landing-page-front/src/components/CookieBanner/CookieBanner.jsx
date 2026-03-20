import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false); // ❗ ferme mais ne sauvegarde rien
  };

  const handleLearnMore = () => {
    setVisible(false); // ❗ ferme mais pas de consentement
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">

        {/* Close */}
        <button className="cookie-close" onClick={handleClose}>
          ✕
        </button>

        {/* Title */}
        <h3>🍪 Cookies & confidentialité</h3>

        {/* Text */}
        <p>
          Nous utilisons uniquement des cookies essentiels pour assurer le bon
          fonctionnement de la plateforme. Aucun tracking publicitaire n’est utilisé.
        </p>

        {/* Link */}
        <Link 
          to="/cookies" 
          className="cookie-link"
          onClick={handleLearnMore}
        >
          En savoir plus
        </Link>

        {/* Actions */}
        <div className="cookie-actions">
          <button className="btn-decline" onClick={handleDecline}>
            Refuser
          </button>
          <button className="btn-accept" onClick={handleAccept}>
            Accepter
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;