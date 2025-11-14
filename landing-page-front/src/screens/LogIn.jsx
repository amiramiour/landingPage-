import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';

function Contact() {
  return (
    <div className="app">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Contact;