import React from 'react';
import Prestas from '../PrestatinQualifis/Prestas';
import PrestasGen from '../SevGenEtud/PrestasGen';
import Header from '../Header/Header';
import EtudHero from '../EtudHero/EtudHero';
import Footer from '../Footer/Footer';
import '../../App.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <EtudHero />
      <Prestas />
      <PrestasGen />
      <Footer />
    </div>
  );
}

export default Home;