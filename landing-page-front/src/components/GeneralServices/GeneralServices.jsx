import React, { useRef, useEffect, useState } from "react";
import ServiceCard1 from "../ServiceCard1/ServiceCard";
import "./GeneralServices.css";

import arrowLeft from "../../assets/btn_orange_left.png";
import arrowRight from "../../assets/btn_orange_right.png";
import defaultImg from "../../assets/Animateur interculturel.jpeg";

const GeneralServices = () => {
  const scrollRef = useRef(null);
  const [missions, setMissions] = useState([]);
  const [appliedMissions, setAppliedMissions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/missions`)
      .then((res) => res.json())
      .then((data) => {
        const all = data.data || data;
        const sorted = [...all].sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          return new Date(b.startDate) - new Date(a.startDate);
        });
        setMissions(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) return;

    const user = JSON.parse(storedUser);
    if (user.role !== "student") return;

    fetch(`${import.meta.env.VITE_API_URL}/api/candidatures/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const missionIds = data
          .filter((c) => c.status !== "rejected")
          .map((c) => c.missionId);
        setAppliedMissions(missionIds);
      })
      .catch(() => {});
  }, []);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  const visibleMissions = missions.slice(0, 5);

  return (
    <section className="services-section"> 
      
      <div className="services-header-section">
        <div className="header-text-content">
          <div className="orange-square"></div>
          <h2>NOS MISSIONS DISPONIBLES</h2>
          <p className="services-description-section">
            Explorez des missions variées adaptées aux compétences et aux ambitions des étudiants.
          </p>
        </div>
        <button className="voir-plus-section">Voir plus</button>
      </div>

      <div className="services-scroll-section" ref={scrollRef}>
        <div className="services-grid-section">
          {visibleMissions.map((mission) => {
            const alreadyApplied = appliedMissions.includes(mission.id);

            return (
              <ServiceCard1
                key={mission.id}
                id={mission.id}
                title={mission.title}
                description={mission.description}
                date={mission.startDate?.slice(0, 10)}
                type={mission.type}
                companyName={mission.employer?.companyName}
                companyLogo={
                  mission.employer?.photoUrl
                    ? `${import.meta.env.VITE_API_URL}/${mission.employer.photoUrl}`
                    : defaultImg
                }
                icon={defaultImg}
                alreadyApplied={alreadyApplied}
              />
            );
          })}
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