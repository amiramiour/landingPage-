import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileEtudiant from "../components/ProfileEtudiant/ProfileEtudiant";

function ProfileEtudiantScreen() {
  return (
    <div className="app">
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ProfileEtudiant />
      </main>
      <Footer />
    </div>
  );
}

export default ProfileEtudiantScreen;
