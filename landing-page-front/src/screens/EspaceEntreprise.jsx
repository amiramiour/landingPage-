import React from 'react';
import Header from '../components/Header/Header';
import EntrepriseHero from '../components/EntrepriseHero/EntrepriseHero';
import TeamDirectory from '../components/TeamDirectory/TeamDirectory';
import Footer from '../components/Footer/Footer';

function EspaceEntreprise() {
  return (
    <div className="app">
      <Header />
      <EntrepriseHero />
      <TeamDirectory />
      <Footer />
    </div>
  );
}

export default EspaceEntreprise;