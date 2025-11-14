import React, { useState } from 'react';
import './RegisterFormEtud.css';
import LogoLogin from '../../assets/LogoLogin.png';
import { Link } from 'react-router-dom';

const RegisterFormEtud = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    field: "",
    training: "",
    school: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role: "student",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      field: formData.field,
      training: formData.training,
      school: formData.school,
      password: formData.password,
    };

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erreur lors de l'inscription");
        return;
      }

      alert("Compte étudiant créé !");
      console.log("REGISTER STUDENT:", data);
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    }
  };

  return (
    <div className="rf-etud-container">
      <div className="rf-etud-decorative-lines">
        <div className="rf-etud-line rf-etud-line-yellow"><div className="rf-etud-circle rf-etud-circle-yellow"></div></div>
        <div className="rf-etud-line rf-etud-line-blue"><div className="rf-etud-circle rf-etud-circle-blue"></div></div>
        <div className="rf-etud-line rf-etud-line-orange"><div className="rf-etud-circle rf-etud-circle-orange"></div></div>
        <div className="rf-etud-line rf-etud-line-teal"><div className="rf-etud-circle rf-etud-circle-teal"></div></div>
      </div>

      <div className="rf-etud-wrapper">
        <div className="rf-etud-logo-container">
          <img src={LogoLogin} alt="LinkyJob Logo" className="rf-etud-logo" />
        </div>

        <div className="rf-etud-form-container">
          <h2 className="rf-etud-title">Inscrivez-vous</h2>

          <form onSubmit={handleSubmit}>
            {[
              { label: "Nom*", name: "lastName" },
              { label: "Prénom*", name: "firstName" },
              { label: "Email*", name: "email" },
              { label: "N° téléphone*", name: "phone" },
              { label: "Domaine d'études*", name: "field" },
              { label: "Intitulé de la formation*", name: "training" },
              { label: "Établissement de formation", name: "school" },
              { label: "Mot de passe*", name: "password", type: "password" },
            ].map(({ label, name, type = "text" }) => (
              <div className="rf-etud-group" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="rf-etud-input"
                  required
                />
              </div>
            ))}

            <button type="submit" className="rf-etud-btn rf-etud-btn-primary">Inscription</button>

            <button type="button" className="rf-etud-btn rf-etud-btn-google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg> Inscrivez-vous avec Google
            </button>
          </form>

          <Link to="/" className="rf-etud-back">‹ Retour</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormEtud;
