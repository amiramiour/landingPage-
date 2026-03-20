import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const Accessibilite = () => {
  const sections = [
    {
      title: "Engagement d’accessibilité",
      content:
        "LinkyJob s’engage à rendre sa plateforme accessible au plus grand nombre, quelles que soient les capacités des utilisateurs.",
    },
    {
      title: "Accessibilité numérique",
      content:
        "Nous veillons à proposer une interface claire, lisible et utilisable sur différents supports (ordinateur, tablette, mobile).",
    },
    {
      title: "Améliorations continues",
      content:
        "Des améliorations sont régulièrement apportées afin de renforcer l’accessibilité et l’expérience utilisateur.",
    },
    {
      title: "Limitations éventuelles",
      content:
        "Certaines fonctionnalités peuvent encore présenter des limites d’accessibilité. Nous travaillons activement à les corriger.",
    },
    {
      title: "Contact",
      content:
        "Si vous rencontrez une difficulté d’accès à un contenu ou une fonctionnalité, vous pouvez nous contacter afin de nous en informer.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <LegalPage
        title="Accessibilité"
        subtitle="Notre engagement pour une plateforme accessible"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default Accessibilite;