import React from 'react';
import Header from '../components/Header/Header';
import EntrepriseHero from '../components/EntrepriseHero/EntrepriseHero';
import Footer from '../components/Footer/Footer';
import AddPrestation from '../components/AddPrestation/AddPrestation';
function AddPrestations() {
  return (
    <div className="app">
      <Header />
      <EntrepriseHero />
      <AddPrestation />
      <Footer />
    </div>
  );
}

export default AddPrestations;