import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const Cookies = () => {
  const sections = [
    {
      title: "Utilisation des cookies",
      content:
        "La plateforme LinkyJob utilise des cookies afin d’assurer son bon fonctionnement et d’améliorer l’expérience utilisateur.",
    },
    {
      title: "Qu’est-ce qu’un cookie",
      content:
        "Un cookie est un petit fichier stocké sur votre appareil lors de la navigation sur un site. Il permet notamment de reconnaître votre session et de faciliter certaines fonctionnalités.",
    },
    {
      title: "Cookies utilisés sur LinkyJob",
      content:
        "Nous utilisons uniquement des cookies essentiels nécessaires au fonctionnement du service.",
    },
    {
      title: "Fonction des cookies essentiels",
      content:
        "Ces cookies permettent de maintenir votre session connectée, sécuriser vos données et garantir une navigation fluide sur la plateforme.",
    },
    {
      title: "Absence de tracking",
      content:
        "LinkyJob n’utilise pas de cookies publicitaires, ni de suivi comportemental, ni de vente de données.",
    },
    {
      title: "Durée de conservation",
      content:
        "Les cookies sont conservés pour une durée limitée, généralement jusqu’à la déconnexion ou pour une durée maximale conforme aux obligations légales.",
    },
    {
      title: "Gestion des cookies",
      content:
        "Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au fonctionnement du service. Vous pouvez toutefois configurer votre navigateur pour limiter leur utilisation.",
    },
    {
      title: "Protection des données",
      content:
        "Les informations liées aux cookies sont traitées dans le respect de la réglementation en vigueur et ne sont jamais utilisées à des fins commerciales.",
    },
    {
      title: "Évolution de la politique",
      content:
        "Cette politique peut être modifiée à tout moment afin de s’adapter aux évolutions légales ou techniques.",
    },
    {
      title: "Contact",
      content:
        "Pour toute question concernant l’utilisation des cookies, vous pouvez contacter l’équipe LinkyJob via la page de contact.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <LegalPage
        title="Politique de cookies"
        subtitle="Transparence sur l’utilisation des cookies"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default Cookies;