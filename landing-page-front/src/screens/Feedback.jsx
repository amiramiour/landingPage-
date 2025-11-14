import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Feedback from '../components/Feedback/Feedback';

function Contact() {
  return (
    <div className="app">
      <Header />
        <Feedback />
      <Footer />
    </div>
  );
}

export default Contact;