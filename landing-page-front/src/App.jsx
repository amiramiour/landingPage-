import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import EspaceEtudiant from './components/screens/EspaceEtudiant';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;