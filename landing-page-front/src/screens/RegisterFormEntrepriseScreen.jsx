import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RegisterFormEntreprise from '../components/RegisterFormEntreprise/RegisterFormEntreprise';

function RegisterFormEntrepriseScreen() {
  return (
    <div className="app">
      <Header />
      <RegisterFormEntreprise />
      <Footer />
    </div>
  );
}

export default RegisterFormEntrepriseScreen;