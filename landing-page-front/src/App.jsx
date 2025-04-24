import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EspaceEtudiant from './components/screens/EspaceEtudiant';
import Home from './components/screens/Home';
import Contact from './components/screens/Contact';
import LogIn from './components/screens/LogIn';
import ForgetPass from './components/screens/ForgetPass';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mot-de-passe-oublie" element={<ForgetPass />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;