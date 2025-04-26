import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu-icon-24.png';
import vectorIcon from '../../assets/Vector.png'; 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePrestations = () => {
    setPrestationsOpen(!prestationsOpen);
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

            <div className="dropdown">
            <span className="nav-link" onClick={togglePrestations}>
  Prestations <img src={vectorIcon} alt="Flèche bas" className="vector-icon" />
</span>

  {prestationsOpen && (
    <div className="dropdown-content">
      <Link to="/prestationsqualifiee" className="dropdown-link qualifiees">
        Prestations Qualifiées
      </Link>
      <Link to="/prestationsgenerales" className="dropdown-link generales">
        Prestations Générales
      </Link>
    </div>
  )}
</div>



            <Link to="/" className="nav-link">A propos</Link>
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