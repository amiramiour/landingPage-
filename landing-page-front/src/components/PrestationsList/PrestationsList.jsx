import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./PrestationsList.css";

import defaultExpertiseImg from "../../assets/Techniciensinformatique.jpeg";
import defaultServicesImg from "../../assets/recept.jpeg";
import icon from "../../assets/icon.png";

const PrestationsList = () => {
  const location = useLocation();
  const [missions, setMissions] = useState([]);
  const [limit, setLimit] = useState(4);

  //  Détection auto de la page
  const isExpertPage = location.pathname.includes("prestationsqualifiee");

  //  Config dynamique
  const config = {
    expertise: {
      type: "mission_d_expertise",
      title: "MISSIONS D'EXPERTISE",
      subtitle: "Pour les missions requérant des compétences techniques ou un savoir certifié.",
      color: "#FACC15",
      slug: "/prestationsqualifiee",
      defaultImg: defaultExpertiseImg,
    },
    service: {
      type: "mission_de_service",
      title: "MISSIONS DE SERVICE",
      subtitle: "Pour les missions accessibles sans formation préalable ou expertise particulière.",
      color: "#7FD8B1",
      slug: "/prestationsgenerales",
      defaultImg: defaultServicesImg,
    },
  };

  //  Choisir la bonne config selon l’URL
  const page = isExpertPage ? config.expertise : config.service;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/missions`)
      .then((res) => res.json())
      .then((data) => {
        const list = data.data || data;
        const filtered = list.filter((m) => m.type === page.type);
        setMissions(filtered);
      })
      .catch((err) => console.error("Erreur récupération missions :", err));
  }, [page.type]);

  const visible = missions.slice(0, limit);

  const handleVoirPlus = () => setLimit((prev) => prev + 4);

  return (
    <div className="pq-section">
      <div className="pq-container">

        {/* HEADER DYNAMIQUE */}
        <div className="pq-header">
          <div
            className="pq-line"
            style={{ backgroundColor: page.color }}
          ></div>

          <h1 className="pq-main-title">{page.title}</h1>
          <p className="pq-subtitle">{page.subtitle}</p>
        </div>

        {/* LISTE DES MISSIONS */}
        <div className="pq-grid">
          {visible.map((service) => (
            <Link
              key={service.id}
              to={`${page.slug}/${service.id}`}
              className="pq-service-card-link"
            >
              <div className="pq-service-card">
                <div className="pq-image-wrapper">
                  <img
                    src={page.defaultImg}
                    alt={service.title}
                    className="pq-image"
                  />
                </div>

                <div className="pq-content">
                  <span className="pq-service-label">
                    {isExpertPage ? "Mission d'expertise" : "Mission de service"}
                  </span>

                  <h3 className="pq-title">{service.title}</h3>
                  <p className="pq-description">{service.description}</p>

                  <div className="pq-meta-global">
                    <img src={icon} className="pq-user-icon" />

                    <div className="pq-meta-text">
                      <div className="pq-user-name">
                        {service.companyName || "Entreprise"}
                      </div>

                      <div className="pq-meta-info-simple">
                        <span>{service.startDate?.slice(0, 10)}</span> • <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* BOUTON VOIR PLUS */}
        {limit < missions.length && (
          <div className="pq-cta">
            <button
              className="pq-btn"
              onClick={handleVoirPlus}
              style={{ backgroundColor: page.color }}
            >
              Voir plus <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrestationsList;
