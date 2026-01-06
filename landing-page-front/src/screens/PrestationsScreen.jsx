import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import PrestationsList from '../components/PrestationsList/PrestationsList';
import HeroPrestation from '../components/HeroPrestation/HeroPrestation';

function PrestationsScreen() {
  return (
    <div className="app">
      <Header />
      
      {/*  Hero dynamique (qualifié / général selon l’URL) */}
      <HeroPrestation />

      {/*  Liste dynamique (qualifié / général selon l’URL) */}
      <PrestationsList />

      <Footer />
    </div>
  );
}

export default PrestationsScreen;