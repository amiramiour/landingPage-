import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo_linkyjob.svg';
import menuIcon from '../../assets/menu-icon-24.png';
import vectorIcon from '../../assets/Vector.png';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const togglePrestations = () => setPrestationsOpen(!prestationsOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // 🎨 Couleurs dynamiques par page
  const getLinkStyle = (page) => {
    switch (page) {
      case 'etudiant': return { color: '#6EC1E4' };
      case 'entreprise': return { color: '#FF7F32' };
      case 'apropos': return { color: '#FFEB64' };
      case 'contact': return { color: '#7FD8B1' };
      default: return {};
    }
  };

  //  Applique la couleur si la route est active
  const activeStyle = (path, key) =>
    location.pathname === path ? getLinkStyle(key) : {};

  return (
    <header className="header">
      <nav>

        {/* Logo */}
        <div className="left-section">
          <Link to="/">
            <img src={logo} alt="LINKYJOB Logo" className="header-logo" />
          </Link>
        </div>

        {/* Liens */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

          <Link
            to="/espace-etudiant"
            className="nav-link"
            style={activeStyle('/espace-etudiant', 'etudiant')}
          >
            Espace Etudiant
          </Link>

          <Link
            to="/espace-entreprise"
            className="nav-link"
            style={activeStyle('/espace-entreprise', 'entreprise')}
          >
            Espace Entreprise
          </Link>

          {/* Dropdown Missions */}
          <div className="dropdown">
            <span className="nav-link" onClick={togglePrestations}>
              Missions
              <img src={vectorIcon} alt="▼" className="vector-icon" />
            </span>

            {prestationsOpen && (
              <div className="dropdown-content">
                <Link
                  to="/prestationsqualifiee"
                  className="dropdown-link qualifiees"
                >
                  Missions d'expertise
                </Link>

                <Link
                  to="/prestationsgenerales"
                  className="dropdown-link generales"
                >
                  Missions de service
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/apropos"
            className="nav-link"
            style={activeStyle('/apropos', 'apropos')}
          >
            A propos
          </Link>

          <Link
            to="/contact"
            className="nav-link"
            style={activeStyle('/contact', 'contact')}
          >
            Contact
          </Link>

        </div>

        {/* Profil + Menu Mobile */}
        <div className="right-section">

          {user ? (
            <div className="dropdown">
              <img
                src={
                  user.photoUrl
                    ? `${import.meta.env.VITE_API_URL}/${user.photoUrl}`
                    : `${import.meta.env.VITE_API_URL}/uploads/default-avatar.png`
                }
                alt="Profil"
                className="profile-pic"
                onClick={toggleProfile}
              />

              {profileOpen && (
                <div className="dropdown-content profile-dropdown">

                  <Link
  to={user.role === "company" ? "/profile-entreprise" : "/profile-etudiant"}
  className="dropdown-link"
>
  Mon profil
</Link>


                  

                  <button className="dropdown-link logout-link" onClick={handleLogout}>
                    Déconnexion
                  </button>

                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'btn-connexion-header active' : 'btn-connexion-header'
              }
            >
              Connexion
            </NavLink>
          )}

          {/* Bouton burger */}
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu" />
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Header;
