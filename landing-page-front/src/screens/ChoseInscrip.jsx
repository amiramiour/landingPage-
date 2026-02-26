import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ChoseInscripComponent from '../components/ChoseInscripComponent/ChoseInscripComponent'; 

function ChoseInscrip() {
  return (
    <div className="app">
      <Header />
      <ChoseInscripComponent />
      <Footer />
    </div>
  );
}

export default ChoseInscrip;
