import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon-24.png'; // Import de l'icône de menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="LINKYJOB Logo" className="logo-image" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </button>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Espace Etudiant</a>
          <a href="#" className="nav-link">Espace Entreprise</a>
          <a href="#" className="nav-link">Espace Particulier</a>
          <a href="#" className="nav-link">Prestations</a>
          <a href="#" className="nav-link">A propos</a>
          <a href="#" className="nav-link">Contact</a>
          <button className="btn-inscription">Inscription</button>
          <button className="btn-connexion">Connexion</button>
          <select className="language-select">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;