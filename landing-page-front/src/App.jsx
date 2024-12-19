import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
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
      <Footer />
    </div>
  );
}

export default App;