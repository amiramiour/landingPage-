import React, { useState } from 'react';
import './RegisterFormEntreprise.css';
import LogoLogin from '../../assets/logo_linkyjob.png';
import { Link, useNavigate } from 'react-router-dom'; 

const RegisterFormEntreprise = () => {

  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    companyId: "",
    address: "",
    email: "",
    password: "",
  });
  const validatePassword = (password) => {
  const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return strongPasswordRegex.test(password);
  };
  const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validateCompanyId = (id) => {
  const regex = /^\d{9}(\d{5})?$/;
  return regex.test(id);
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedType = formData.companyType
      .trim()
      .toUpperCase()
      .replace(/[^A-Z]/g, "_")
      .replace(/_+/g, "_");

    const payload = {
      role: "company",
      companyName: formData.companyName,
      companyType: normalizedType,
      companyId: formData.companyId,
      address: formData.address,
      email: formData.email,
      password: formData.password,
    };

    try {
        if (!validatePassword(formData.password)) {
    alert(
      "Mot de passe trop faible : minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial."
    );
    return;
  }
    if (!validateEmail(formData.email)) {
  alert("Veuillez saisir un email valide.");
  return;
}
if (!validateCompanyId(formData.companyId)) {
  alert("Veuillez saisir un SIREN ou SIRET valide.");
  return;
}
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erreur lors de l'inscription");
        return;
      }

      alert("Compte entreprise créé !");
      console.log("REGISTER COMPANY:", data);

      navigate("/login");  
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    }
  };


  return (
    <div className="rf-entreprise-container">
      <div className="rf-entreprise-decorative-lines">
        <div className="rf-entreprise-line rf-entreprise-line-yellow"><div className="rf-entreprise-circle rf-entreprise-circle-yellow"></div></div>
        <div className="rf-entreprise-line rf-entreprise-line-blue"><div className="rf-entreprise-circle rf-entreprise-circle-blue"></div></div>
        <div className="rf-entreprise-line rf-entreprise-line-orange"><div className="rf-entreprise-circle rf-entreprise-circle-orange"></div></div>
        <div className="rf-entreprise-line rf-entreprise-line-teal"><div className="rf-entreprise-circle rf-entreprise-circle-teal"></div></div>
      </div>

      <div className="rf-entreprise-wrapper">
        <div className="rf-entreprise-logo-container">
          <img src={LogoLogin} alt="LinkyJob Logo" className="rf-entreprise-logo" />
        </div>

        <div className="rf-entreprise-form-container">
          <h2 className="rf-entreprise-title">Inscrivez-vous</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Nom de l’entreprise*", name: "companyName" },
              { label: "Type d'entreprise* (SARL, SAS, Auto-entrepreneur)", name: "companyType" },
              { label: "Numéro d'identification* (SIREN / SIRET)", name: "companyId" },
              { label: "Adresse du siège social*", name: "address" },
              { label: "Adresse mail de connexion*", name: "email" },
              { label: "Mot de passe*", name: "password", type: "password" },
            ].map(({ label, name, type = "text" }) => (
              <div className="rf-entreprise-group" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="rf-entreprise-input"
                  required
                />
              </div>
            ))}

            <button type="submit" className="rf-entreprise-btn rf-entreprise-btn-primary">Inscription</button>

            <button type="button" className="rf-entreprise-btn rf-entreprise-btn-google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                  <path  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg> Inscrivez-vous avec Google
            </button>
          </form>

          <Link to="/" className="rf-entreprise-back">‹ Retour</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormEntreprise;
