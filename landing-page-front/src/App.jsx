import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EspaceEtudiant from './components/screens/EspaceEtudiant';
import EspaceEntreprise from './components/screens/EspaceEntreprise';
import Home from './components/screens/Home';
import Contact from './components/screens/Contact';
import LogIn from './components/screens/LogIn';
import ForgetPass from './components/screens/ForgetPass';
import ChoseInscrip from './components/screens/ChoseInscrip';
import RegisterFormEtud from './components/screens/RegisterFormEtudScreen';
import RegisterFormEntreprise from './components/screens/RegisterFormEntrepriseScreen';
import ProfileEntreprise from './components/screens/ProfileEntrepriseScreen';
import PrestationsqualifieScreen from './components/screens/PrestationsqualifieScreen';
import PqProfileScreen from './components/screens/PqProfileScreen';
import AproposScreen from './components/screens/AproposScreen';
import { AuthProvider } from './components/context/AuthContext'; 

function App() {
  return (
          <AuthProvider>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espace-etudiant" element={<EspaceEtudiant />} />
          <Route path="/espace-entreprise" element={<EspaceEntreprise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mot-de-passe-oublie" element={<ForgetPass />} />
          <Route path="/choseInscrip" element={<ChoseInscrip />} />
          <Route path="/registerStudent" element={<RegisterFormEtud />} />
          <Route path="/registerEntreprise" element={<RegisterFormEntreprise />} />
          <Route path="/profile/:id" element={<ProfileEntreprise />} />
          <Route path="/prestationsqualifiee" element={<PrestationsqualifieScreen />} />
          <Route path="/prestationsqualifiee/:id" element={<PqProfileScreen />} />
          <Route path="/apropos" element={<AproposScreen />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>

  );
}

export default App;