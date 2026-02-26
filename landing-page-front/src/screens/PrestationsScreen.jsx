import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import PrestationsList from '../components/PrestationsList/PrestationsList';
import HeroPrestation from '../components/HeroPrestation/HeroPrestation';

function PrestationsScreen() {
  return (
    <div className="app">
      <Header />
      
      <HeroPrestation />

      <PrestationsList />

      <Footer />
    </div>
  );
}

export default PrestationsScreen;