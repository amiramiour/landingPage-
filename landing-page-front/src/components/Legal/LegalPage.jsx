import React from "react";
import "./LegalPage.css";
import LegalNav from "./LegalNav";
const LegalPage = ({ title, subtitle, sections }) => {
  return (
    <div className="legal-page">

      <LegalNav />

      <div className="legal-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="legal-container">
        {sections.map((section, index) => (
          <section key={index} className="legal-card">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>

    </div>
  );
};

export default LegalPage;