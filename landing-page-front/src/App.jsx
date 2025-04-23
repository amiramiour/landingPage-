import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EspaceEtudiant from './components/screens/EspaceEtudiant';
import Home from './components/screens/Home';
import Contact from './components/screens/Contact';
import LogIn from './components/screens/LogIn';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;