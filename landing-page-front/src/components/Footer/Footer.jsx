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
          <a href="#espace-entreprise">Espace Entreprise</a>
          <a href="#espace-particulier">Espace Particulier</a>
          <a href="#prestations">Prestations</a>
          <a href="#a-propos">A propos</a>
          <a href="#contact">Contact</a>
          <Link to="/feedback" className="nav-link">Feedback</Link>

        </nav>

        <hr className="divider" />

        <div className="footer-bottom">
          
          <div className="social-icons">
            <FaFacebookF size={18} color="white" />
            <FaInstagram size={18} color="white" />
            <FaXTwitter size={18} color="white" /> 
            <FaLinkedinIn size={18} color="white" />
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