import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileEtudiantPage from "../components/ProfileEtudiant/ProfileEtudiantPage";

function ProfileEtudiantScreen() {
  return (
    <div className="app profile-etudiant">
      <Header />
      <main style={{ minHeight: "80vh", paddingTop: "70px" }}>
        <ProfileEtudiantPage />
      </main>
      <Footer />
    </div>
  );
}

export default ProfileEtudiantScreen;
