import React, { useState } from "react";
import ProfileEtudiant from "./ProfileEtudiant";
import HistoriqueEtudiant from "./HistoriqueEtudiant";
import "./TabsProfil.css";

function ProfileEtudiantPage() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div>

      {/* ===== ONGLET EN HAUT ===== */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "profil" ? "active" : ""}`}
          onClick={() => setActiveTab("profil")}
        >
          Profil
        </button>

        <button
          className={`tab ${activeTab === "historique" ? "active" : ""}`}
          onClick={() => setActiveTab("historique")}
        >
          Historique
        </button>
      </div>

      {/* ===== CONTENU ===== */}
      {activeTab === "profil" && <ProfileEtudiant />}
      {activeTab === "historique" && <HistoriqueEtudiant />}

    </div>
  );
}

export default ProfileEtudiantPage;
