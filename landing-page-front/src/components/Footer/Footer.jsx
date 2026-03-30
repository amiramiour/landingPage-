import React from 'react';
import './Footer.css';
import LogoFooter from '../../assets/Logo_linkyjob_Blanc.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-logo">
          <Link to="/">
            <img src={LogoFooter} alt="LinkyJob" />
          </Link>
        </div>
        
        <nav className="footer-nav">
          <Link to="/espace-etudiant">Espace Etudiant</Link>
          <Link to="/espace-entreprise">Espace Entreprise</Link>
          <Link to="/espace-particulier">Espace Particulier</Link>
          <Link to="/prestationsqualifiee">Prestations</Link>
          <Link to="/a-propos">A propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>

        <nav className="footer-legal">
          <Link to="/cgu">CGU</Link>
          <Link to="/cgv">CGV</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/accessibilite">Accessibilité</Link>
        </nav>

        <hr className="divider" />

        <div className="footer-bottom">
          
          <div className="social-icons">
            <FaFacebookF size={18} />
            <FaInstagram size={18} />
            <FaXTwitter size={18} /> 
            <FaLinkedinIn size={18} />
          </div>

          <div className="contact-item">
            <strong>Téléphone:</strong> 01 44 75 18 20
          </div>

          <div className="contact-item">
            <strong>Email:</strong> linkyjob@gmail.com
          </div>

          <div className="copyright">
            © 2026 Linky Job
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;