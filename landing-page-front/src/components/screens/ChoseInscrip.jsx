import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ChoseInscripComponent from '../ChoseInscripComponent/ChoseInscripComponent'; // ⚠️ Renommé ici

function ChoseInscrip() {
  return (
    <div className="app">
      <Header />
      <ChoseInscripComponent /> {/* ✅ ici aussi */}
      <Footer />
    </div>
  );
}

export default ChoseInscrip;
