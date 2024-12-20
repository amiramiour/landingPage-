import React from 'react';
import Prestas from '../PrestatinQualifis/Prestas';
import PrestasGen from '../SevGenEtud/PrestasGen';
import Header from '../Header/Header';
import EtudHero from '../EtudHero/EtudHero';
import Footer from '../Footer/Footer';
import Formulaire from '../Formulaire/Formulaire';
import Header from '../Header/Header';
import Prestas from '../PrestatinQualifis/Prestas';

function Home() {
  return (
    <div className="app">
      <Header />
      <EtudHero />
      <Prestas />
      <PrestasGen />

      <Formulaire />
      <Footer />
    </div>
  );
}

export default Home;