import React from 'react';
import Condition from './components/Condition/Condition';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Information from './components/Information/information';
import Services from './components/Services/Services';

import GeneralServices from './components/GeneralServices/GeneralServices';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
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

export default App;