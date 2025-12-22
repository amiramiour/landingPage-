import React from 'react';
import './Footer.css';
import LogoFooter from '../../assets/Logo_linkyjob_Blanc.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={LogoFooter} alt="LinkyJob Logo" />
          </Link>
        </div>
        
        <nav className="footer-nav">
          <Link to="/espace-etudiant" className="nav-link">Espace Etudiant</Link>
          <a href="#espace-entreprise">Espace Entreprise</a>
          <a href="#espace-particulier">Espace Particulier</a>
          <a href="#prestations">Prestations</a>
          <a href="#a-propos">A propos</a>
          <a href="#contact">Contact</a>
          <Link to="/feedback" className="nav-link">Feedback</Link>

        </nav>

        <hr className="divider" />

        <nav className="footer-contact">
          <span className="icons">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />
          </span>
          <p>Téléphone: <a href="tel:0144751820">01 44 75 18 20</a></p>
          <p>Email: <a href="mailto:linkyjob@gmail.com">linkyjob@gmail.com</a></p>
          <p>© 2024 Linky Job</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;