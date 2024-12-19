import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EspaceEtudiant from './components/screens/EspaceEtudiant';
import Home from './components/screens/Home';

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