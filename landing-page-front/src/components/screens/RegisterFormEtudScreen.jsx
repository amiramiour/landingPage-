import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterFormEtud from '../RegisterFormEtud/RegisterFormEtud';

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