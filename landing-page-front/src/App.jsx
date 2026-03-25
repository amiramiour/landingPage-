import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EspaceEtudiant from './screens/EspaceEtudiant';
import EspaceEntreprise from './screens/EspaceEntreprise';
import Home from './screens/Home';
import Contact from './screens/Contact';
import LogIn from './screens/LogIn';
import ForgetPass from './screens/ForgetPass';
import ChoseInscrip from './screens/ChoseInscrip';
import RegisterFormEtud from './screens/RegisterFormEtudScreen';
import RegisterFormEntreprise from './screens/RegisterFormEntrepriseScreen';
import StudentPublicProfile from './screens/StudentPublicProfileScreen';
import PrestationsqualifieScreen from './screens/PrestationsScreen';
import PqProfileScreen from './screens/PqProfileScreen';
import AproposScreen from './screens/AproposScreen';
import ProfileEtudiant from './screens/ProfileEtudiant';
import ProfileEntreprise from './screens/ProfileEntreprise';
import { AuthProvider } from './components/context/AuthContext'; 
import Feedback from './screens/Feedback';
import AddPrestation from './screens/AddPrestation';
import PrestationsScreen from './screens/PrestationsScreen';
import BetaBanner from "./components/BetaBanner/BetaBanner";
import ScrollToTop from './screens/ScrollToTop';
import CGU from "./screens/CGU";
import Confidentialite from "./screens/Confidentialite";
import MentionsLegales from "./screens/MentionsLegales";
import Cookies from "./screens/Cookies";
import CGV from "./screens/CGV";
import Accessibilite from "./screens/Accessibilite";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import AdminDashboard from "./screens/AdminDashboard";

function App() {
  return (
          <AuthProvider>
    <Router>
      <div className="app">
        <BetaBanner />
                  <ScrollToTop />

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
          <Route path="/profile/:id" element={<StudentPublicProfile />} />
          <Route path="/prestationsqualifiee/:id" element={<PqProfileScreen />} />
          <Route path="/apropos" element={<AproposScreen />} />
          <Route path="/profile-etudiant" element={<ProfileEtudiant />} />
          <Route path="/profile-entreprise" element={<ProfileEntreprise />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/addprestation" element={<AddPrestation />} />
          <Route path="/prestationsqualifiee" element={<PrestationsScreen />} />
          <Route path="/prestationsgenerales" element={<PrestationsScreen />} />
          <Route path="/prestationsgenerales/:id" element={<PqProfileScreen />} />
          <Route path="/profile-etudiant/:id" element={<ProfileEtudiant />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      <CookieBanner />
    </Router>
    </AuthProvider>

  );
}

export default App;