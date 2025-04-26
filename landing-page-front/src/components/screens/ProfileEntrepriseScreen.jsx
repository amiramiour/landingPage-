import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProfileEntreprise from '../ProfileEntreprise/ProfileEntreprise';

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