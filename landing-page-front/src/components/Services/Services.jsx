import React, { useRef, useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

import arrowLeft from "../../assets/Buttongauche.png";
import arrowRight from "../../assets/Buttondroite.png";
import defaultImg from "../../assets/Techniciensinformatique.jpeg"; 

const Services = () => {
  const scrollRef = useRef(null);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/missions")
      .then((res) => res.json())
      .then((data) => {
        const all = data.data || data; // cache ou db
        const filtered = all.filter(
          (m) => m.type === "mission_d_expertise"
        );
        setMissions(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="services">
      <div className="services-header">
        <h2>MISSIONS D’EXPERTISE</h2>
        <p className="services-description">
          Pour les missions requérant des compétences techniques ou un savoir certifié.
        </p>
        <button className="voir-plus">Voir plus</button>
      </div>

      <div className="services-scroll" ref={scrollRef}>
        <div className="services-grid">
          {missions.map((mission) => (
            <ServiceCard
              key={mission.id}
              id={mission.id}
              title={mission.title}
              description={mission.description}
              category={mission.niveau || "Mission qualifiée"}
              date={mission.startDate?.slice(0, 10)}
              icon={defaultImg}
            />
          ))}
        </div>
      </div>

      <div className="scroll-buttons">
        <img src={arrowLeft} className="scroll-btn" onClick={scrollLeft} />
        <img src={arrowRight} className="scroll-btn" onClick={scrollRight} />
      </div>
    </section>
  );
};

export default Services;
