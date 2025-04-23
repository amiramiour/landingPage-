import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

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