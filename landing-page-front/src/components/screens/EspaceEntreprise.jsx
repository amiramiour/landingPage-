import React from 'react';
import Header from '../Header/Header';
import EntrepriseHero from '../EntrepriseHero/EntrepriseHero';
import TeamDirectory from '../TeamDirectory/TeamDirectory';
import Footer from '../Footer/Footer';

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