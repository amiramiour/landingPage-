import React, { useRef, useEffect, useState } from "react";
import ServiceCard1 from "../ServiceCard1/ServiceCard";
import "./GeneralServices.css";

import arrowLeft from "../../assets/btn_orange_left.png";
import arrowRight from "../../assets/btn_orange_right.png";
import defaultImg from "../../assets/Animateur interculturel.jpeg";

const GeneralServices = () => {
  const scrollRef = useRef(null);
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/missions")
      .then((res) => res.json())
      .then((data) => {
        const all = data.data || data;

        //  Trier par missions les plus récentes
        const sorted = [...all].sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          return new Date(b.startDate) - new Date(a.startDate);
        });

        setMissions(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  //  On limite volontairement à 5 missions
  const visibleMissions = missions.slice(0, 5);

  return (
    <section className="services">
      <div className="services-header-section">
        <h2>NOS MISSIONS DISPONIBLES</h2>
        <p className="services-description-section">
          Explorez des missions variées adaptées aux compétences et aux ambitions des étudiants.
        </p>
        <button className="voir-plus-section">Voir plus</button>
      </div>

      <div className="services-scroll-section" ref={scrollRef}>
        <div className="services-grid-section">
          {visibleMissions.map((mission) => (
            <ServiceCard1
  key={mission.id}
  title={mission.title}
  description={mission.description}
  date={mission.startDate?.slice(0, 10)}
  type={mission.type}

  /*  ENTREPRISE */
  companyName={mission.employer?.companyName}
  companyLogo={
    mission.employer?.photoUrl
      ? `http://localhost:3000/${mission.employer.photoUrl}`
      : defaultImg
  }

  /* image mission */
  icon={defaultImg}
/>
          ))}
        </div>
      </div>

      <div className="scroll-buttons-section">
        <img
          src={arrowLeft}
          className="scroll-btn-section"
          onClick={scrollLeft}
          alt="scroll left"
        />
        <img
          src={arrowRight}
          className="scroll-btn-section"
          onClick={scrollRight}
          alt="scroll right"
        />
      </div>
    </section>
  );
};

export default GeneralServices;
