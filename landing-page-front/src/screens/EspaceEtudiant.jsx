import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import EtudHero from "../components/EtudHero/EtudHero";
import Footer from "../components/Footer/Footer";
import PrestationsSlider from "../components/PrestationsSlider/PrestationsSlider";

function EspaceEtudiant() {
  const [filter, setFilter] = useState("tous");
  const [missionsExpert, setMissionsExpert] = useState([]);
  const [missionsGenerales, setMissionsGenerales] = useState([]);

  //  Références pour scroll
  const topRef = useRef(null);
  const expertRef = useRef(null);
  const generalRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/missions")
      .then((res) => res.json())
      .then((data) => {
        const missions = data.data || data;

        setMissionsExpert(missions.filter(m => m.type === "mission_d_expertise"));
        setMissionsGenerales(missions.filter(m => m.type === "mission_de_service"));
      });
  }, []);

  // 🔥 Gestion du scroll selon filtre
  const handleFilter = (value) => {
    setFilter(value);

    setTimeout(() => {
      if (value === "expertise" && expertRef.current) {
        expertRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      else if (value === "service" && generalRef.current) {
        generalRef.current.scrollIntoView({ behavior: "smooth" });
      } 
      else if (value === "tous" && topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const filteredExpert =
    filter === "tous" || filter === "expertise" ? missionsExpert : [];

  const filteredGeneral =
    filter === "tous" || filter === "service" ? missionsGenerales : [];

  return (
    <div className="app">
      <Header />
      <EtudHero />

      {/* Référence haut de zone */}
      <div ref={topRef}></div>

      {/* TITRE GLOBAL */}
      <h2 className="prestas-title" style={{ marginTop: "2rem" }}>
        ESPACE ÉTUDIANT
      </h2>

      {/* FILTRES */}
      <div className="prestas-filters">
        <button
          className={`filter-button ${filter === "tous" ? "active" : ""}`}
          onClick={() => handleFilter("tous")}
        >
          Tous
        </button>

        <button
          className={`filter-link ${filter === "expertise" ? "active" : ""}`}
          onClick={() => handleFilter("expertise")}
        >
          MISSIONS D’EXPERTISE
        </button>

        <button
          className={`filter-link ${filter === "service" ? "active" : ""}`}
          onClick={() => handleFilter("service")}
        >
          MISSIONS DE SERVICE
        </button>
      </div>

      {/* CARROUSEL EXPERTISE */}
      <div ref={expertRef}>
        {filteredExpert.length > 0 && (
          <PrestationsSlider theme="yellow" missions={filteredExpert} />
        )}
      </div>

      {/* CARROUSEL SERVICE */}
      <div ref={generalRef}>
        {filteredGeneral.length > 0 && (
          <PrestationsSlider theme="green" missions={filteredGeneral} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default EspaceEtudiant;
