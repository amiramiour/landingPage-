import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProfileEntreprise from '../components/ProfileEntreprise/ProfileEntreprise';

function ProfileEntrepriseScreen() {
  return (
    <div className="app">
      <Header />
      <ProfileEntreprise />
      <Footer />
    </div>
  );
}

export default ProfileEntrepriseScreen;