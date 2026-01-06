import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProfileEntreprise from '../components/StudentPublicProfile/StudentPublicProfile';

function StudentPublicProfileScreen() {
  return (
    <div className="app">
      <Header />
      <ProfileEntreprise />
      <Footer />
    </div>
  );
}

export default StudentPublicProfileScreen;