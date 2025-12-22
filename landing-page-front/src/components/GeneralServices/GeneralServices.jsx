import React, { useRef, useEffect, useState } from "react";
import ServiceCard1 from "../ServiceCard1/ServiceCard";
import "./GeneralServices.css";

import arrowLeft from "../../assets/ButtonVgauche.png";
import arrowRight from "../../assets/ButtonVdroite.png";
import defaultImg from "../../assets/Animateur interculturel.jpeg"; // ❗ Même image pour toutes

const GeneralServices = () => {
  const scrollRef = useRef(null);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/missions")
      .then((res) => res.json())
      .then((data) => {
        const all = data.data || data;
        const filtered = all.filter(
          (m) => m.type === "mission_de_service"
        );
        setMissions(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="services">
      <div className="services-header-section">
        <h2>MISSIONS DE SERVICE</h2>
        <p className="services-description-section">
          Pour les missions accessibles sans formation préalable ou expertise particulière.
        </p>
        <button className="voir-plus-section">Voir plus</button>
      </div>

      <div className="services-scroll-section" ref={scrollRef}>
        <div className="services-grid-section">
          {missions.map((mission) => (
            <ServiceCard1
              key={mission.id}
              id={mission.id}
              title={mission.title}
              description={mission.description}
              category={mission.niveau || "Mission de service"}
              date={mission.startDate?.slice(0,10)}
              icon={defaultImg}
            />
          ))}
        </div>
      </div>

      <div className="scroll-buttons-section">
        <img src={arrowLeft} className="scroll-btn-section" onClick={scrollLeft} />
        <img src={arrowRight} className="scroll-btn-section" onClick={scrollRight} />
      </div>
    </section>
  );
};

export default GeneralServices;
