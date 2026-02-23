import React, { useEffect, useState } from "react";
import "./StudentPublicProfile.css";
import { Link, useParams } from "react-router-dom";

// Jeu d'icônes SVG "Outline" pour un look pro
const Icons = {
  User: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  MapPin: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  School: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  CheckCircle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  Clock: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  Globe: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
};

const DEFAULT_MISSIONS = [
  "Conception architecturale",
  "Modélisation 2D/3D et élaboration de plans",
  "Assistance aux études techniques et suivi de projets.",
];

const StudentPublicProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const isCompany = currentUser?.role === "company";
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.data || data);
      })
      .catch((err) =>
        console.error("Erreur chargement profil étudiant :", err)
      );
  }, [id]);

  if (!student) {
    return (
      <div className="pe-loader-container">
        <div className="pe-spinner"></div>
      </div>
    );
  }

  const profile = student.studentProfile;

  // --- TRAITEMENT DES DONNÉES ---
  
  // Missions
  const rawMissions = profile?.missions_recherchees;
  let missions = DEFAULT_MISSIONS;
  if (rawMissions) {
    try {
      const parsed = JSON.parse(rawMissions);
      if (Array.isArray(parsed)) missions = parsed;
      else if (typeof parsed === "string") missions = parsed.split("\n").filter(Boolean);
    } catch {
      missions = rawMissions.split("\n").filter(Boolean);
    }
  }

  // Disponibilités
  let disponibilites = [];
  if (profile?.disponibilites) {
    try {
      const parsed = JSON.parse(profile.disponibilites);
      Object.entries(parsed).forEach(([day, slots]) => {
        Object.entries(slots).forEach(([slot, value]) => {
          if (value) disponibilites.push({ day, slot });
        });
      });
    } catch {}
  }

  // Split strings pour les badges (plus propre visuellement)
  const skillList = profile?.competences 
    ? profile.competences.split(/,|,\s|\n/).filter(s => s.trim()) 
    : ["Conception", "Rigueur", "Travail d'équipe"];

  const langList = profile?.langues_parlees
    ? profile.langues_parlees.split(/,|,\s|\n/).filter(s => s.trim())
    : ["Français", "Anglais"];

  return (
    <div className="pe-page-wrapper">
      <div className="pe-content-grid">
        
        {/* === COLONNE GAUCHE : IDENTITÉ === */}
        <aside className="pe-sidebar">
          <div className="pe-card pe-card-identity">
            <div className="pe-avatar-box">
              <img
                src={student.photoUrl ? `${import.meta.env.VITE_API_URL}/${student.photoUrl}` : ""}
                alt={`${student.firstName}`}
                className="pe-avatar-img"
                onError={(e) => {
                  e.target.src = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                }}
              />
            </div>
            
            <h1 className="pe-fullname">{student.firstName} {student.lastName}</h1>
            <p className="pe-job-title">{student.training || "Étudiant"}</p>
            
            <div className="pe-meta-infos">
              <div className="pe-meta-row">
                <Icons.User />
                <span>{student.age || "20"} ans</span>
              </div>
              <div className="pe-meta-row">
                <Icons.Globe />
                <span>{profile?.nationalites || "Non renseigné"}</span>
              </div>
              <div className="pe-meta-row">
                <Icons.School />
                <span>{student.school || "École d'Architecture"}</span>
              </div>
            </div>

            <div className="pe-divider"></div>

            <button
            className={`pe-btn-contact ${!isCompany ? "disabled" : ""}`}
            disabled={!isCompany}
          >
            Contacter l'étudiant
          </button>

          {!isCompany && (
            <p className="pe-note-auth">
              Connectez-vous en tant qu'entreprise pour contacter.
            </p>
          )}
            
            <Link to="/" className="pe-link-return">Retour à la liste</Link>
          </div>
        </aside>

        {/* === COLONNE DROITE : DÉTAILS === */}
        <main className="pe-main-details">
          
          {/* Section Missions */}
          <section className="pe-card">
            <header className="pe-card-header">
              <Icons.Briefcase />
              <h2>Missions recherchées</h2>
            </header>
            <div className="pe-missions-list">
              {missions.map((mission, idx) => (
                <div key={idx} className="pe-mission-item">
                  <div className="pe-icon-check"><Icons.CheckCircle /></div>
                  <p>{mission}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section Compétences & Langues */}
          <section className="pe-card">
            <header className="pe-card-header">
              <Icons.CheckCircle /> {/* Ou une icône 'Star' / 'Cpu' */}
              <h2>Compétences & Langues</h2>
            </header>
            
            <div className="pe-group-title">Savoir-faire</div>
            <div className="pe-tags-wrapper">
              {skillList.map((skill, i) => (
                <span key={i} className="pe-tag pe-tag-skill">{skill.trim()}</span>
              ))}
            </div>

            <div className="pe-group-title pe-mt">Langues</div>
            <div className="pe-tags-wrapper">
              {langList.map((lang, i) => (
                <span key={i} className="pe-tag pe-tag-lang">{lang.trim()}</span>
              ))}
            </div>
          </section>

          {/* Section Disponibilités */}
          <section className="pe-card">
            <header className="pe-card-header">
              <Icons.Clock />
              <h2>Disponibilités</h2>
            </header>
            <div className="pe-availability-grid">
              {disponibilites.length > 0 ? (
                disponibilites.map((d, index) => (
                  <div key={index} className="pe-slot-item">
                    <span className="pe-day">{d.day}</span>
                    <span className="pe-hour">{d.slot}</span>
                  </div>
                ))
              ) : (
                <p className="pe-empty-text">Aucune disponibilité spécifique renseignée.</p>
              )}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default StudentPublicProfile;