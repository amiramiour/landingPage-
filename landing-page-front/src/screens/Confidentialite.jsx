import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const Confidentialite = () => {
  const sections = [
    {
      title: "Notre engagement en matière de données",
      content:
        "Chez LinkyJob, la protection de vos informations personnelles est une priorité. Cette politique explique comment vos données sont collectées, utilisées et sécurisées.",
    },
    {
      title: "Qui est responsable des données",
      content:
        "Les données personnelles sont traitées par l’éditeur de la plateforme LinkyJob. Vous pouvez nous contacter via le site pour toute question.",
    },
    {
      title: "Informations collectées",
      content:
        "Nous collectons des données d’identité, professionnelles, ainsi que des documents et des données techniques liées à l’utilisation du service.",
    },
    {
      title: "Utilisation des données",
      content:
        "Les données sont utilisées pour le fonctionnement de la plateforme, la mise en relation, la gestion des candidatures et l’amélioration du service.",
    },
    {
      title: "Base légale",
      content:
        "Le traitement repose sur l’exécution du service, votre consentement et notre intérêt légitime à sécuriser la plateforme.",
    },
    {
      title: "Accès aux informations",
      content:
        "Seules les personnes autorisées peuvent accéder aux données. Certaines informations sont visibles par d’autres utilisateurs dans le cadre du service.",
    },
    {
      title: "Durée de conservation",
      content:
        "Les données sont conservées pendant la durée d’utilisation du compte puis supprimées en cas d’inactivité ou de demande.",
    },
    {
      title: "Vos droits",
      content:
        "Vous disposez de droits d’accès, modification, suppression et portabilité de vos données.",
    },
    {
      title: "Sécurité",
      content:
        "Des mesures de sécurité sont mises en place pour protéger vos informations.",
    },
    {
      title: "Cookies",
      content:
        "Des cookies peuvent être utilisés pour améliorer votre expérience.",
    },
    {
      title: "Mises à jour",
      content:
        "Cette politique peut évoluer à tout moment.",
    },
    {
      title: "Contact",
      content:
        "Vous pouvez contacter LinkyJob via la page contact pour toute question.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <LegalPage
        title="Politique de confidentialité"
        subtitle="Dernière mise à jour : Mars 2026"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default Confidentialite;