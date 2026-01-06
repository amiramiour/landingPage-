import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className="app">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;