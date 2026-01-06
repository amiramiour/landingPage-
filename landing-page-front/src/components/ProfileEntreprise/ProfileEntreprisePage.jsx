import React, { useState } from "react";
import ProfileEntreprise from "./ProfileEntreprise";
import HistoriqueEntreprise from "./HistoriqueEntreprise";
import "./TabsProfil.css";

function ProfileEntreprisePage() {
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
          Suivi
        </button>
      </div>

      {/* ===== CONTENU ===== */}
      {activeTab === "profil" && <ProfileEntreprise />}
{activeTab === "historique" && <HistoriqueEntreprise />}


    </div>
  );
}

export default ProfileEntreprisePage;
