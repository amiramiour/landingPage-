import React from 'react';
import Prestas from '../components/PrestatinQualifis/Prestas';
import PrestasGen from '../components/SevGenEtud/PrestasGen';
import Header from '../components/Header/Header';
import EtudHero from '../components/EtudHero/EtudHero';
import Footer from '../components/Footer/Footer';
import Formulaire from '../components/Formulaire/Formulaire';
import { useAuth } from '../components/context/AuthContext'; // ✅ importe le context

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
