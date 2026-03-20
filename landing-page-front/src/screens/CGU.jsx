import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const CGU = () => {
const sections = [
  {
    title: "Présentation du service",
    content:
      "Les présentes conditions encadrent l’utilisation de la plateforme LinkyJob, un service de mise en relation entre étudiants, entreprises et particuliers. LinkyJob permet notamment la publication de missions, le dépôt de candidatures et la gestion de profils professionnels.",
  },
  {
    title: "Acceptation des conditions",
    content:
      "L’accès et l’utilisation de la plateforme impliquent l’acceptation sans réserve des présentes conditions. Lors de la création d’un compte, l’utilisateur reconnaît avoir pris connaissance de ces règles et s’engage à les respecter.",
  },
  {
    title: "Définitions des utilisateurs",
    content:
      "La plateforme distingue plusieurs types d’utilisateurs : les étudiants à la recherche d’opportunités, les entreprises proposant des missions et les particuliers pouvant publier des besoins spécifiques. Chaque utilisateur dispose d’un espace dédié et de fonctionnalités adaptées.",
  },
  {
    title: "Création et gestion du compte",
    content:
      "L’inscription nécessite la fourniture d’informations exactes et à jour. L’utilisateur est responsable de la confidentialité de ses identifiants. Toute activité réalisée via son compte est réputée effectuée par lui.",
  },
  {
    title: "Fonctionnalités proposées",
    content:
      "LinkyJob permet aux étudiants de créer un profil, déposer des documents, postuler à des missions et suivre leurs candidatures. Les entreprises peuvent publier des missions, consulter des profils et gérer les candidatures reçues.",
  },
  {
    title: "Engagements des utilisateurs",
    content:
      "Chaque utilisateur s’engage à adopter un comportement respectueux et professionnel. Il est interdit de publier des informations fausses, des contenus illicites ou de détourner la plateforme de son usage principal.",
  },
  {
    title: "Utilisation des données et contenus",
    content:
      "Les utilisateurs restent propriétaires des contenus qu’ils publient. Toutefois, ils autorisent LinkyJob à les exploiter dans le cadre du fonctionnement du service, notamment pour afficher les profils et faciliter les mises en relation.",
  },
  {
    title: "Gestion des candidatures",
    content:
      "LinkyJob agit comme un intermédiaire technique entre les utilisateurs. La plateforme ne garantit pas l’obtention d’une mission ou d’un recrutement. Les décisions finales appartiennent aux utilisateurs concernés.",
  },
  {
    title: "Modération et contrôle",
    content:
      "La plateforme se réserve le droit de supprimer tout contenu non conforme et de suspendre un compte en cas de non-respect des règles. Les utilisateurs peuvent également signaler tout comportement abusif.",
  },
  {
    title: "Suspension ou suppression de compte",
    content:
      "En cas de violation des présentes conditions, LinkyJob peut suspendre ou supprimer un compte sans préavis. L’utilisateur peut également demander la suppression de son compte à tout moment.",
  },
  {
    title: "Limitation de responsabilité",
    content:
      "LinkyJob met en œuvre les moyens nécessaires pour assurer le bon fonctionnement du service, mais ne peut garantir une disponibilité continue. La plateforme ne saurait être tenue responsable des échanges ou relations entre utilisateurs.",
  },
  {
    title: "Protection des données personnelles",
    content:
      "Les données collectées sont traitées conformément à la réglementation en vigueur. L’utilisateur dispose de droits d’accès, de modification et de suppression de ses informations.",
  },
  {
    title: "Utilisation des cookies",
    content:
      "Des cookies peuvent être utilisés pour améliorer l’expérience utilisateur et analyser l’utilisation du service. L’utilisateur peut configurer ses préférences à tout moment.",
  },
  {
    title: "Évolution des conditions",
    content:
      "Les présentes conditions peuvent être modifiées à tout moment. Les utilisateurs seront informés en cas de changement important.",
  },
  {
    title: "Cadre légal applicable",
    content:
      "Les présentes conditions sont soumises au droit français. En cas de litige, une solution amiable sera privilégiée avant toute action judiciaire.",
  },
  {
    title: "Nous contacter",
    content:
      "Pour toute question concernant l’utilisation de la plateforme ou ces conditions, vous pouvez contacter l’équipe LinkyJob via le formulaire de contact disponible sur le site.",
  },
];

  return (
    <div className="app">
      <Header />
      
      <LegalPage
        title="Conditions Générales d’Utilisation"
        subtitle="Dernière mise à jour : Mars 2026"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default CGU;