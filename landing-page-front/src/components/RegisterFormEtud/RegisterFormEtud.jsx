import React, { useState } from 'react';
import './RegisterFormEtud.css';
import LogoLogin from '../../assets/logo_linkyjob.png';
import { Link, useNavigate } from 'react-router-dom';   
import Select from "react-select";
import countries from "i18n-iso-countries";
import fr from "i18n-iso-countries/langs/fr.json";
import ISO6391 from "iso-639-1";
  countries.registerLocale(fr);
  const countryOptions = Object.entries(
  countries.getNames("fr", { select: "official" })
  ).map(([code, name]) => ({
    value: name,
    label: name
  }));
  const languageOptions = [
    { value: "Français", label: "Français" },
    { value: "Anglais", label: "Anglais" },
    { value: "Espagnol", label: "Espagnol" },
    { value: "Arabe", label: "Arabe" },
    { value: "Allemand", label: "Allemand" },
    { value: "Italien", label: "Italien" },
    { value: "Portugais", label: "Portugais" },
    { value: "Chinois", label: "Chinois" },
    { value: "Russe", label: "Russe" }
  ];
const RegisterFormEtud = () => {
    const selectStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid black",
      borderRadius: 0,
      minHeight: "38px",
      boxShadow: "none",
      fontSize: "0.85rem",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "6px 8px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "4px",
    }),
  };
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const navigate = useNavigate(); 
  const validatePassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return strongPasswordRegex.test(password);
  };
  const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validatePhone = (phone) => {
  const regex = /^(?:\+33|0)[1-9]\d{8}$/;
  return regex.test(phone);
};
  const [step, setStep] = useState(1);
  const [languages, setLanguages] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    training: "",
    school: "",
    password: "",
    nationalite: "",
adresse: "",

competences: "",
missions: "",

disponibilites: {
  Lundi:    { "9-12": false, "12-15": false, "15-18": false },
  Mardi:   { "9-12": false, "12-15": false, "15-18": false },
  Mercredi:{ "9-12": false, "12-15": false, "15-18": false },
  Jeudi:   { "9-12": false, "12-15": false, "15-18": false },
  Vendredi:{ "9-12": false, "12-15": false, "15-18": false },
  Samedi:  { "9-12": false, "12-15": false, "15-18": false },
  Dimanche:{ "9-12": false, "12-15": false, "15-18": false },
},
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const toggleDisponibilite = (day, slot) => {
  setFormData((prev) => ({
    ...prev,
    disponibilites: {
      ...prev.disponibilites,
      [day]: {
        ...prev.disponibilites[day],
        [slot]: !prev.disponibilites[day][slot],
      },
    },
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const payload = {
      role: "student",

      firstName: formData.firstName,
      lastName: formData.lastName,
      age: Number(formData.age),
      email: formData.email,
      phone: formData.phone,
      training: formData.training,
      school: formData.school,
      password: formData.password,

      nationalites: formData.nationalite,
      competences: formData.competences,
      langues_parlees: languages
        .filter(l => l.name && l.level)
        .map(l => `${l.name} (${l.level})`)
        .join(", "),
      missions_recherchees: formData.missions,
      localisation: formData.adresse,
      disponibilites: formData.disponibilites,
    };

    try {
      const hasAvailability = Object.values(formData.disponibilites)
        .some(day => Object.values(day).some(slot => slot));

      if (!hasAvailability) {
        alert("Veuillez sélectionner au moins une disponibilité.");
        setLoading(false);
        return;
      }

      if (!validatePassword(formData.password)) {
        alert("Mot de passe trop faible.");
        setLoading(false);
        return;
      }

      if (!validateEmail(formData.email)) {
        alert("Veuillez saisir un email valide.");
        setLoading(false);
        return;
      }

      if (!validatePhone(formData.phone)) {
        alert("Veuillez saisir un numéro de téléphone valide.");
        setLoading(false);
        return;
      }
            setLoading(true);


      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Erreur lors de l'inscription");
        setLoading(false);
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      alert("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };
  const isLanguagesValid = languages.length > 0;

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
          {success && (
            <div className="rf-success-message">
              Compte étudiant créé avec succès !
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {[
              ...(step === 1
              ? [
                  { label: "Nom*", name: "lastName" },
                  { label: "Prénom*", name: "firstName" },
                  { label: "Âge*", name: "age", type: "number" },
                  { label: "Nationalité*", name: "nationalite" },
                  { label: "Email*", name: "email" },
                  { label: "N° téléphone*", name: "phone" },
                  { label: "Adresse domicile*", name: "adresse" },
                  { label: "Mot de passe*", name: "password", type: "password" },
                ]
              : []),
              

              ...(step === 2
              ? [
                  { label: "Intitulé de la formation*", name: "training" },
                  { label: "Établissement de formation", name: "school" },
                  { label: "Vos compétences", name: "competences" },
                ]
              : []),

            ].map(({ label, name, type = "text" }) => (
              <div className="rf-etud-group" key={`${step}-${name}`}>
                <label htmlFor={name}>{label}</label>
                {name === "competences" || name === "missions" ? (
  <textarea
    name={name}
    id={name}
    value={formData[name]}
    onChange={handleChange}
    className="rf-etud-textarea"
    placeholder={
      name === "competences"
        ? "Saisissez vos compétences professionnelles"
        : "Saisissez les missions que vous recherchez"
    }
  />
) : name === "nationalite" ? (
<Select
  options={countryOptions}
  placeholder="Choisissez votre nationalité"
  className="rf-etud-select"
  styles={selectStyles}
  isSearchable
  isClearable
  onChange={(selected) =>
    setFormData((prev) => ({
      ...prev,
      nationalite: selected?.value || ""
    }))
  }
/>
) : (
  <input
    type={type}
    name={name}
    id={name}
    value={formData[name]}
    onChange={handleChange}
    className="rf-etud-input"
    required
  />
)}
              </div>
            ))}
            {step === 2 && !isLanguagesValid && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                Veuillez renseigner une langue et sélectionner un niveau.
              </p>
            )}
{step === 2 && (
  <div className="rf-etud-group">
    <label>Langue et niveau maîtrisé *</label>

    {/* SELECT LANGUE */}
    <div className="rf-lang-input-wrapper">
      <Select
        options={languageOptions}
        placeholder="Choisissez une langue"
        className="rf-etud-select"
        styles={selectStyles}
        isSearchable
        value={
          selectedLanguage
            ? { value: selectedLanguage, label: selectedLanguage }
            : null
        }
        onChange={(selected) =>
          setSelectedLanguage(selected?.value || "")
        }
      />

  <button
  type="button"
  className="rf-lang-plus"
  onClick={() => {
    setSelectedLanguage("");
    setSelectedLevel("");
  }}
>
  +
</button>
    </div>

    {/* NIVEAUX */}
    <div className="rf-lang-radio">
      {["A1","A2","B1","B2","C1","C2","Natif"].map((lvl) => (
        <label key={lvl} className="rf-lang-radio-item" data-level={lvl}>
          <input
            type="radio"
            checked={selectedLevel === lvl}
            onChange={() => {
  setSelectedLevel(lvl);

  if (!selectedLanguage) return;

  if (languages.some(l => l.name === selectedLanguage)) {
    alert("Cette langue est déjà ajoutée");
    return;
  }

  const newLanguages = [
    ...languages,
    { name: selectedLanguage, level: lvl }
  ];

  setLanguages(newLanguages);

  setSelectedLanguage("");
  setSelectedLevel("");
}}
          />
          <span>{lvl}</span>
        </label>
      ))}
    </div>

    {/* LANGUES AJOUTÉES */}
    <div className="rf-lang-selected">
      {languages
        .filter((l) => l.name && l.level)
        .map((lang, i) => (
          <div key={i} className="rf-lang-chip">
            {lang.name} • {lang.level}
            <span
              className="rf-lang-remove"
              onClick={() =>
                setLanguages(languages.filter((_, idx) => idx !== i))
              }
            >
              ×
            </span>
          </div>
        ))}
    </div>

  </div>
)}
            {step === 2 && (
              <div className="rf-etud-group">
                <label htmlFor="missions">Missions recherchées</label>
                <textarea
                  name="missions"
                  id="missions"
                  value={formData.missions}
                  onChange={handleChange}
                  className="rf-etud-textarea"
                  placeholder={`Exemple :
                  Support technique
                  Développement web
                  Maintenance informatique`}
                />
              </div>
            )}
            {step === 3 && (
              <div className="rf-etud-group">
                <label>Vos disponibilités</label>

                <table style={{ width: "100%", fontSize: "0.85rem" }}>
                  <thead>
                    <tr>
                      <th>Jours</th>
                      <th>9h-12h</th>
                      <th>12h-15h</th>
                      <th>15h-18h</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(formData.disponibilites).map(([day, slots]) => (
                      <tr key={day}>
                        <td>{day}</td>
                        {Object.entries(slots).map(([slot, value]) => (
                          <td key={slot} style={{ textAlign: "center" }}>
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={() => toggleDisponibilite(day, slot)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {step < 3 && (
              <div className="rf-etud-nav">
                <button
                  type="button"
                  className="rf-etud-back"
                  onClick={() => {
                    if (step === 1) {
                      navigate("/");
                    } else {
                      setStep(step - 1);
                    }
                  }}
                >
                  ‹ Retour
                </button>

                <button
              type="button"
              className="rf-etud-next"
              disabled={step === 2 && !isLanguagesValid}
              onClick={() => setStep(step + 1)}
            >
              Suivant &gt;
            </button>
              </div>
            )}
            {step === 3 && (
              <>
                <button
                  type="submit"
                  className="rf-etud-btn rf-etud-btn-primary"
                  disabled={loading || success}
                >
                  {loading
                    ? "Création du compte..."
                    : success
                    ? "Compte créé ✓"
                    : "Inscription"}
                </button>

                <button
                  type="button"
                  className="rf-etud-back"
                  onClick={() => setStep(2)}
                >
                  ‹ Retour
                </button>
              </>
            )}
          </form>
      </div>
      </div>
    </div>
  );
};

export default RegisterFormEtud;
