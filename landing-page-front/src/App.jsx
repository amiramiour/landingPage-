import React from 'react';
import ContactForm from './components/ContactForm';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Bienvenue sur notre Landing Page</h1>
        <p>Inscrivez-vous pour recevoir des nouvelles de notre startup.</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
