import React from 'react';
import Condition from '../Condition/Condition';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Information from '../Information/information';
import Services from '../Services/Services';
import GeneralServices from '../GeneralServices/GeneralServices';
import Footer from '../Footer/Footer';
import '../../App.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <GeneralServices />
      <Information />
      <Condition />
      <Footer />
    </div>
  );
}

export default Home;