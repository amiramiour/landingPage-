import React, { useState } from 'react';
import './Feedback.css';
import LogoContact from '../../assets/logo_linkyjob.png';

const Feedback = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [typeProfil, setTypeProfil] = useState('etudiant');
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState('');
  const [accepteConditions, setAccepteConditions] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ["Plateforme", "Accompagnement", "Offres", "Support", "Autre"];
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  try {
    setLoading(true);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        typeProfil,
        note,
        tags: selectedTags,
        message,
        accepteConditions,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    setSuccess(true);

    setNom("");
    setPrenom("");
    setEmail("");
    setTypeProfil("etudiant");
    setNote(0);
    setMessage("");
    setSelectedTags([]);
    setAccepteConditions(false);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  } catch (err) {
    alert("Erreur : " + err.message);
  } finally {
    setLoading(false);
  }
};

  const labelsNote = {
    0: "Donnez-nous une note",
    1: "On peut faire mieux…",
    2: "Merci pour votre retour",
    3: "Retour positif, merci",
    4: "Très bon retour, merci",
    5: "Excellent retour, merci",
  };

  return (
    <div className="fb-container">

      {/* Lignes décoratives */}
      <div className="fb-line fb-line-top-left"></div>
      <div className="fb-line fb-line-top-right"></div>
      <div className="fb-line fb-line-bottom-left"></div>
      <div className="fb-line fb-line-bottom-right"></div>

      <img src={LogoContact} alt="Logo LinkyJob" className="fb-logo" />

      <div className="fb-box">

        <h1 className="fb-title">Votre avis compte</h1>

        <p className="fb-subtitle">
          Aidez-nous à améliorer l'expérience LinkyJob pour les étudiants, entreprises et particuliers.
        </p>

        <form onSubmit={handleSubmit} className="fb-form">

          {/* Nom + Prénom */}
          <div className="fb-form-row">
            <div className="fb-form-group">
              <label className="fb-form-label">Nom</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="fb-form-input"
              />
            </div>

            <div className="fb-form-group">
              <label className="fb-form-label">Prénom</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                className="fb-form-input"
              />
            </div>
          </div>
          <div className="fb-form-group">
  <label>Email</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="fb-form-input"
  />
</div>

          {/* Profil + Note */}
          <div className="fb-form-row">
            <div className="fb-form-group">
              <label className="fb-form-label">Vous êtes</label>
              <select
                value={typeProfil}
                onChange={(e) => setTypeProfil(e.target.value)}
                className="fb-form-input"
              >
                <option value="etudiant">Étudiant</option>
                <option value="entreprise">Entreprise</option>
                <option value="particulier">Particulier</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="fb-form-group fb-rating-group">
              <label className="fb-form-label">Note globale</label>
              <div className="fb-stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`fb-star ${note >= value ? 'fb-star-active' : ''}`}
                    onClick={() => setNote(value)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <span className="fb-rating-label">
                {labelsNote[note]}
              </span>
            </div>
          </div>

          {/* TAGS */}
          <div className="fb-tags-container">
            <span className="fb-tags-label">Vous voulez surtout nous parler de :</span>
            <div className="fb-tags">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`fb-tag ${selectedTags.includes(tag) ? "selected" : ""}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="fb-form-group">
            <label className="fb-form-label">Votre message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={500}
              className="fb-form-textarea"
              placeholder="Racontez-nous votre expérience avec LinkyJob..."
            ></textarea>
            <div className="fb-char-counter">
              {message.length} / 500
            </div>
          </div>

          {/* Checkbox */}
          <div className="fb-checkbox-container">
            <input
              type="checkbox"
              id="conditionsFeedback"
              checked={accepteConditions}
              onChange={(e) => setAccepteConditions(e.target.checked)}
              required
              className="fb-checkbox"
            />
            <label htmlFor="conditionsFeedback" className="fb-checkbox-label">
              J'accepte que mon avis soit utilisé pour améliorer LinkyJob.
            </label>
          </div>
          {success && (
  <div className="fb-success-message">
    Merci pour votre avis 
  </div>
)}

       <button
  type="submit"
  className="fb-submit-button"
  disabled={loading}
>
  {loading ? "Envoi en cours..." : "Envoyer mon avis"}
</button>

          <p className="fb-disclaimer">
            Certains avis pourront être mis en avant de façon anonyme sur le site.
          </p>

        </form>
      </div>
    </div>
  );
};

export default Feedback;
