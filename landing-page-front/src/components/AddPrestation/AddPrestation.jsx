import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPrestation.css";

function AddPrestation() {
  const navigate = useNavigate();

  // 🧩 Popup succès
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔒 Vérification d’accès
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.role !== "company") {
      alert("Accès réservé aux entreprises.");
      navigate("/");
    }
  }, [navigate]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    intitule: "",
    type: "",
    description: "",
    niveau: "",
    lieu: "",
    dateDebut: "",
    duree: "",
    remuneration: "",
    conditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🧨 Envoi au backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.conditions) {
      alert("Vous devez accepter les conditions.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/missions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          intitule: form.intitule,
          type: form.type,
          description: form.description,
          niveau: form.niveau,
          lieu: form.lieu,
          dateDebut: form.dateDebut,
          duree: form.duree,
          remuneration: form.remuneration,
          conditions: form.conditions,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Erreur : " + data.error);
        setLoading(false);
        return;
      }

      // 🎉 Popup succès
      setShowSuccess(true);

    } catch (err) {
      console.error(err);
      alert("Erreur serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ap-container">

      {/* Lignes décoratives */}
      <div className="ap-line ap-line-top-left"></div>
      <div className="ap-line ap-line-top-right"></div>
      <div className="ap-line ap-line-bottom-left"></div>
      <div className="ap-line ap-line-bottom-right"></div>

      <div className="ap-box">
        <h1 className="ap-title">AJOUTER UNE PRESTATION</h1>

        <form className="ap-form" onSubmit={handleSubmit}>

          <label className="ap-label">Intitulé de la mission*</label>
          <input
            className="ap-input"
            name="intitule"
            value={form.intitule}
            onChange={handleChange}
            required
          />

          <label className="ap-label">Type de prestation*</label>
          <select
            className="ap-input"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner un type</option>
            <option value="mission_de_service">Mission de service</option>
            <option value="mission_d_expertise">Mission d'expertise</option>
          </select>

          <label className="ap-label">Description de la mission*</label>
          <textarea
            className="ap-textarea"
            name="description"
            placeholder="Écrivez votre description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <label className="ap-label">Niveau d’étude souhaité*</label>
          <div className="ap-radio-grid">
            {["Aucun", "Bac", "Bac+1", "Bac+2", "Licence", "Master"].map((niv) => (
              <label key={niv} className="ap-radio-label">
                <input
                  type="radio"
                  name="niveau"
                  value={niv}
                  checked={form.niveau === niv}
                  onChange={handleChange}
                  required
                />
                {niv}
              </label>
            ))}
          </div>

          <label className="ap-label">Lieu de mission*</label>
          <input
            className="ap-input"
            name="lieu"
            value={form.lieu}
            onChange={handleChange}
            required
          />

          <label className="ap-label">Date de début*</label>
          <input
            type="date"
            className="ap-input"
            name="dateDebut"
            value={form.dateDebut}
            onChange={handleChange}
            required
          />

          <label className="ap-label">Durée de la mission*</label>
          <input
            className="ap-input"
            name="duree"
            value={form.duree}
            onChange={handleChange}
            required
          />

          <label className="ap-label">Montant de rémunération par heure*</label>
          <input
            className="ap-input"
            name="remuneration"
            value={form.remuneration}
            onChange={handleChange}
            required
          />

          <div className="ap-checkbox-container">
            <input
              type="checkbox"
              name="conditions"
              checked={form.conditions}
              onChange={handleChange}
              required
              className="ap-checkbox"
            />
            <label className="ap-checkbox-label">J'accepte les conditions</label>
          </div>

          <button type="submit" className="ap-submit" disabled={loading}>
            {loading ? "Publication..." : "Publier"}
          </button>

        </form>
      </div>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-icon">✔</div>
            <p className="success-text">Prestation publiée avec succès</p>

            <button
              className="success-btn"
              onClick={() => {
                setShowSuccess(false);
                navigate("/espace-entreprise");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default AddPrestation;
