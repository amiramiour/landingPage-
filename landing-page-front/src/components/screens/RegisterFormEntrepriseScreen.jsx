import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterFormEntreprise from '../RegisterFormEntreprise/RegisterFormEntreprise';

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