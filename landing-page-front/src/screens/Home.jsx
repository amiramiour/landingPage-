import React from 'react';
import Condition from '../components/Condition/Condition';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Information from '../components/Information/information';
import Services from '../components/Services/Services';
import GeneralServices from '../components/GeneralServices/GeneralServices';
import Footer from '../components/Footer/Footer';
import AvisClient from '../components/AvisClient/AvisClient';
import Abonnement from '../components/Abonnement/Abonnement';
import '../App.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <GeneralServices />
      <Abonnement />
      <Information />
      <AvisClient />
      <Condition />
      <Footer />
    </div>
  );
}

export default Home;