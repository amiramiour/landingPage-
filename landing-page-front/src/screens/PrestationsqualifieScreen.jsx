import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PrestationsqualifieComponentPage from '../components/PrestationsqualifieComponentPage/PrestationsqualifieComponentPage';
import PrestaQualifiesHero from '../components/PrestaQualifiesHero/PrestaQualifiesHero';
function PrestationsqualifieScreen() {
  return (
    <div className="app">
      <Header />
      <PrestaQualifiesHero />
     
      <PrestationsqualifieComponentPage />
      <Footer />
    </div>
  );
}

export default PrestationsqualifieScreen;