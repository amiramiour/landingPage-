import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileEntreprisePage from "../components/ProfileEntreprise/ProfileEntreprisePage";

function ProfileEntrepriseScreen() {
  return (
    <div className="app profile-entreprise">
      <Header />
      <main style={{ minHeight: "80vh", paddingTop: "70px" }}>
        <ProfileEntreprisePage />
      </main>
      <Footer />
    </div>
  );
}

export default ProfileEntrepriseScreen;
