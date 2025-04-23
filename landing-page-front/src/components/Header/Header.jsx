import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon-24.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="left-section">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="LINKYJOB Logo" className="header-logo" />
            </Link>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/espace-etudiant" className="nav-link">Espace Etudiant</Link>
            <Link to="/espace-entreprise" className="nav-link">Espace Entreprise</Link>
            <a href="#" className="nav-link">Prestations</a>
            <a href="#" className="nav-link">A propos</a>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
        <div className="right-section">
        <NavLink 
  to="/login" 
  className={({ isActive }) =>
    isActive ? 'btn-connexion-header active' : 'btn-connexion-header'
  }
>
  Connexion
</NavLink>

        <button className="menu-toggle" onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu Icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
