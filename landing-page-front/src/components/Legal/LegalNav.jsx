import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LegalNav.css";

const LegalNav = () => {
  const location = useLocation();

  const links = [
    { path: "/cgu", label: "CGU" },
    { path: "/cgv", label: "CGV" },
    { path: "/mentions-legales", label: "Mentions légales" },
    { path: "/accessibilite", label: "Accessibilité" },
    { path: "/confidentialite", label: "Confidentialité" },
    { path: "/cookies", label: "Cookies" },
  ];

  return (
    <div className="legal-nav">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={location.pathname === link.path ? "active" : ""}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default LegalNav;