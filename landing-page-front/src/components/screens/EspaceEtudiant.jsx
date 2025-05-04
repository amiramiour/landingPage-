import React from 'react';
import Prestas from '../PrestatinQualifis/Prestas';
import PrestasGen from '../SevGenEtud/PrestasGen';
import Header from '../Header/Header';
import EtudHero from '../EtudHero/EtudHero';
import Footer from '../Footer/Footer';
import Formulaire from '../Formulaire/Formulaire';
import { useAuth } from '../context/AuthContext'; // ✅ importe le context

function EspaceEtudiant() {
  const { user } = useAuth(); // ✅ récupère l'utilisateur connecté

  return (
    <div className="app">
      <Header />
      <EtudHero />
      <Prestas />
      <PrestasGen />

      {user && <Formulaire />}

      <Footer />
    </div>
  );
}

export default EspaceEtudiant;
