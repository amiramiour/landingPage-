import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginForm.css';
import LogoLogin from '../../assets/LogoLogin.png';
import profilePicture from '../../assets/profilePicture.png';
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setApiError('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erreur de connexion");
      return;
    }

    //  stocker le user + token
    login(data.user, data.token);

    //  redirection selon le rôle
    if (data.user.role === "student") {
      navigate("/profile-etudiant");
    } else if (data.user.role === "company") {
      navigate("/profile-entreprise");
    }

  } catch (err) {
    console.error(err);
    alert("Erreur réseau");
  }
};


  return (
    <div className="login-container">
      <div className="decorative-lines">
        <div className="line line-yellow"><div className="circle circle-yellow"></div></div>
        <div className="line line-blue"><div className="circle circle-blue"></div></div>
        <div className="line line-orange"><div className="circle circle-orange"></div></div>
        <div className="line line-teal"><div className="circle circle-teal"></div></div>
      </div>

      <div className="login-form-wrapper">
        <div className="logo-container">
          <img src={LogoLogin} alt="Logo LinkyJob" className="lf-logo" />
        </div>

        <div className="form-container">
          <h2 className="form-title">Connexion</h2>

          {apiError && <p className="api-error">{apiError}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Mot de passe*</label>
                <Link to="/mot-de-passe-oublie" className="forgot-password">Mot de passe oublié ?</Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'input-error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="btn btn-primary">Connexion</button>

            <div className="google-login">
              <button type="button" className="btn btn-google">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Connectez-vous avec Gmail
              </button>
            </div>

            <div className="register-prompt">
              <span>Vous n'avez pas de compte ?</span>
              <Link to="/choseInscrip" className="register-link">Inscription</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
