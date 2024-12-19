import React from 'react';
import Prestas from '../PrestatinQualifis/Prestas';
import Header from '../Header/Header';
import EtudHero from '../EtudHero/EtudHero';
import Information from '../Information/information';
import Services from '../Services/Services';
import GeneralServices from '../GeneralServices/GeneralServices';
import Footer from '../Footer/Footer';
import '../../App.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <EtudHero />
      <Prestas />
      <Footer />
    </div>
  );
}

export default Home;