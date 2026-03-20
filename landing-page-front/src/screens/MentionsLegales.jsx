import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const MentionsLegales = () => {
  const sections = [
    {
      title: "Informations sur l’éditeur",
      content:
        "Le site LinkyJob est édité par son créateur dans le cadre d’un projet de plateforme numérique de mise en relation entre étudiants, entreprises et particuliers.",
    },
    {
      title: "Responsable de publication",
      content:
        "La gestion et la publication des contenus du site sont assurées par l’équipe LinkyJob.",
    },
    {
      title: "Hébergement de la plateforme",
      content:
        "Le site est hébergé via des services cloud sécurisés permettant d’assurer la disponibilité, la performance et la protection des données des utilisateurs.",
    },
    {
      title: "Technologies utilisées",
      content:
        "La plateforme repose sur des technologies web modernes incluant notamment React pour le frontend, Node.js pour le backend et une base de données sécurisée.",
    },
    {
      title: "Propriété du contenu",
      content:
        "L’ensemble des éléments présents sur la plateforme (textes, design, code, identité visuelle) sont protégés. Toute reproduction ou utilisation sans autorisation est interdite.",
    },
    {
      title: "Protection des données",
      content:
        "Les informations personnelles sont traitées conformément à la réglementation en vigueur. Pour plus de détails, consultez la politique de confidentialité.",
    },
    {
      title: "Utilisation des cookies",
      content:
        "Des cookies peuvent être utilisés afin d’améliorer l’expérience utilisateur et analyser l’usage de la plateforme.",
    },
    {
      title: "Limitation de responsabilité",
      content:
        "LinkyJob met tout en œuvre pour assurer le bon fonctionnement du service mais ne peut garantir l’absence d’erreurs ou d’interruptions. La plateforme agit comme un intermédiaire entre utilisateurs.",
    },
    {
      title: "Cadre légal",
      content:
        "Le site est soumis au droit applicable en France. En cas de litige, une résolution amiable sera privilégiée avant toute action judiciaire.",
    },
    {
      title: "Contact",
      content:
        "Pour toute question concernant le site ou son fonctionnement, vous pouvez contacter l’équipe LinkyJob via la page dédiée.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <LegalPage
        title="Mentions légales"
        subtitle="Informations relatives à l’éditeur du site"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default MentionsLegales;