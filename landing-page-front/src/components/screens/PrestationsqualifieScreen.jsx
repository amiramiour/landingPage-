import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PrestationsqualifieComponentPage from '../PrestationsqualifieComponentPage/PrestationsqualifieComponentPage';
import PrestaQualifiesHero from '../PrestaQualifiesHero/PrestaQualifiesHero';
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