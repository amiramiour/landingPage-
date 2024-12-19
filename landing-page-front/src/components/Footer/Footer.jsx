import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="LinkyJob Logo" />
        </div>
        
        <nav className="footer-nav">
          <a href="#espace-etudiant">Espace Etudiant</a>
          <a href="#espace-entreprise">Espace Entreprise</a>
          <a href="#espace-particulier">Espace Particulier</a>
          <a href="#prestations">Prestations</a>
          <a href="#a-propos">A propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <hr className="divider" />

        <nav className="footer-contact">
          <span className="icons">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
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
