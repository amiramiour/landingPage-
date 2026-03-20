import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LegalPage from "../components/Legal/LegalPage";

const CGV = () => {
  const sections = [
    {
      title: "Objet des conditions",
      content:
        "Les présentes conditions encadrent les offres payantes proposées sur la plateforme LinkyJob. Elles définissent les modalités de souscription, de paiement et d’utilisation des fonctionnalités premium.",
    },
    {
      title: "Offres disponibles",
      content:
        "LinkyJob propose des abonnements destinés aux étudiants et aux entreprises. Ces offres permettent d’accéder à des fonctionnalités avancées améliorant la visibilité, la mise en relation et la gestion des candidatures.",
    },
    {
      title: "Abonnement étudiant",
      content:
        "L’offre premium étudiant est proposée à 4,99€ par mois. Elle permet notamment d’obtenir des alertes prioritaires, d’améliorer la visibilité du profil et d’accéder à certaines opportunités en avance.",
    },
    {
      title: "Abonnement entreprise",
      content:
        "L’offre premium entreprise est proposée à 19,99€ par mois. Elle inclut des fonctionnalités telles que la mise en avant des missions, un accès prioritaire aux profils et des outils facilitant le recrutement.",
    },
    {
      title: "Modalités de paiement",
      content:
        "Les paiements sont réalisés en ligne via un prestataire sécurisé. Les informations bancaires ne sont pas stockées sur les serveurs de LinkyJob.",
    },
    {
      title: "Activation des services",
      content:
        "Les fonctionnalités premium sont activées immédiatement après validation du paiement. L’utilisateur bénéficie de l’accès aux services pendant toute la durée de l’abonnement.",
    },
    {
      title: "Renouvellement",
      content:
        "Les abonnements sont renouvelés automatiquement chaque mois, sauf résiliation par l’utilisateur avant la date d’échéance.",
    },
    {
      title: "Résiliation",
      content:
        "L’utilisateur peut résilier son abonnement à tout moment depuis son espace personnel. La résiliation prend effet à la fin de la période en cours.",
    },
    {
      title: "Remboursement",
      content:
        "Sauf disposition légale contraire, aucun remboursement n’est effectué pour une période déjà entamée. En cas de dysfonctionnement majeur, une analyse pourra être réalisée au cas par cas.",
    },
    {
      title: "Responsabilité",
      content:
        "LinkyJob agit comme une plateforme de mise en relation. Elle ne garantit ni l’obtention d’une mission pour les étudiants ni le recrutement pour les entreprises.",
    },
    {
      title: "Modification des offres",
      content:
        "Les offres et tarifs peuvent évoluer. Toute modification sera communiquée aux utilisateurs avant son application.",
    },
    {
      title: "Données et confidentialité",
      content:
        "Les données liées aux paiements et à l’utilisation des services sont traitées conformément à la réglementation en vigueur et à la politique de confidentialité de la plateforme.",
    },
    {
      title: "Droit applicable",
      content:
        "Les présentes conditions sont régies par le droit français. En cas de litige, une solution amiable sera privilégiée avant toute action judiciaire.",
    },
    {
      title: "Contact",
      content:
        "Pour toute question relative aux abonnements ou à la facturation, vous pouvez contacter l’équipe LinkyJob via la page de contact.",
    },
  ];

  return (
    <div className="app">
      <Header />

      <LegalPage
        title="Conditions de vente"
        subtitle="Informations relatives aux abonnements LinkyJob"
        sections={sections}
      />

      <Footer />
    </div>
  );
};

export default CGV;