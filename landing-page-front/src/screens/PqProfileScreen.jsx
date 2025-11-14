import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PqProfile from '../components/PqProfile/PqProfile';

function ProfileEntrepriseScreen() {
  return (
    <div className="app">
      <Header />
      <PqProfile />
      <Footer />
    </div>
  );
}

export default ProfileEntrepriseScreen;