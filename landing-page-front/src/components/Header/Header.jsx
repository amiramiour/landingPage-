import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo_linkyjob.svg';
import vectorIcon from '../../assets/Vector.png';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProfileClick = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
      setProfileOpen(false); 
    } else {
      setProfileOpen(!profileOpen);
    }
  };

useEffect(() => {
  setPrestationsOpen(false);
  setProfileOpen(false);
}, [location.pathname]);
  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const getLinkStyle = (page) => {
    switch (page) {
      case 'etudiant': return { color: '#6EC1E4' };
      case 'entreprise': return { color: '#FF7F32' }; 
      default: return {};
    }
  };

  const activeStyle = (path, key) =>
    location.pathname === path ? getLinkStyle(key) : {};

  return (
    <header className="header">
      <div className="header-container">
        
        <Link to="/" className="logo-link">
          <img src={logo} alt="LinkyJob" className="header-logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          
          <Link 
            to="/espace-etudiant" 
            className="nav-link"
            style={activeStyle('/espace-etudiant', 'etudiant')}
            onClick={() => setMenuOpen(false)}
          >
            Espace Etudiant
          </Link>

          <Link 
            to="/espace-entreprise" 
            className="nav-link"
            style={activeStyle('/espace-entreprise', 'entreprise')}
            onClick={() => setMenuOpen(false)}
          >
            Espace Entreprise
          </Link>

          <div 
  className="dropdown"
>
<span 
  className="nav-link"
  onClick={() => setPrestationsOpen(!prestationsOpen)}
>
                Missions 
              <img src={vectorIcon} alt="v" className="vector-icon" style={{transform: prestationsOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} />
            </span>
            
            {prestationsOpen && (
              <div className="dropdown-content">
<Link 
  to="/prestationsqualifiee" 
  className="dropdown-link" 
  onClick={() => {
    setPrestationsOpen(false);
    setMenuOpen(false);
  }}
>                  Missions d'expertise
                </Link>
<Link 
  to="/prestationsgenerales" 
  className="dropdown-link" 
  onClick={() => {
    setPrestationsOpen(false);
    setMenuOpen(false);
  }}
>
  Missions de service
</Link>
              </div>
            )}
          </div>

          <Link to="/apropos" className="nav-link" onClick={() => setMenuOpen(false)}>A propos</Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>

          {user && (
            <div className="mobile-profile-links">
              <div className="mobile-divider"></div>
              <Link 
                to={user.role === "company" ? "/profile-entreprise" : "/profile-etudiant"} 
                className="nav-link mobile-link-item"
                onClick={() => setMenuOpen(false)}
              >
                Mon profil
              </Link>
              <span className="nav-link mobile-link-item logout-text" onClick={handleLogout}>
                Déconnexion
              </span>
            </div>
          )}
        </nav>

        <div className="right-section">
          {user ? (
            <div className="dropdown" style={{ marginLeft: '10px' }}>
              <img
                src={
                  user.photoUrl
                    ? `${import.meta.env.VITE_API_URL}/${user.photoUrl}`
                    : `${import.meta.env.VITE_API_URL}/uploads/default-avatar.png`
                }
                alt="Profil"
                className="profile-pic"
                onClick={handleProfileClick}
              />
              
              {!isMobile && profileOpen && (
                <div className="dropdown-content profile-dropdown">
                  <Link 
                    to={user.role === "company" ? "/profile-entreprise" : "/profile-etudiant"} 
                    className="dropdown-link"
                    onClick={() => setProfileOpen(false)}
                  >
                    Mon profil
                  </Link>
                  <button className="dropdown-link logout-btn" onClick={handleLogout}>
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink 
              to="/login" 
              className="btn-connexion-header"
            >
              Connexion
            </NavLink>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;