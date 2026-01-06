import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RegisterFormEtud from '../components/RegisterFormEtud/RegisterFormEtud';

function RegisterFormEtudScreen() {
  return (
    <div className="app">
      <Header />
      <RegisterFormEtud />
      <Footer />
    </div>
  );
}

export default RegisterFormEtudScreen;