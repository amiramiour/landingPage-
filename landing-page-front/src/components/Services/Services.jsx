import React, { useRef, useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import { useNavigate } from "react-router-dom";

import arrowLeft from "../../assets/btn_blue_left.png";
import arrowRight from "../../assets/btn_blue_right.png";
import aideIcon from "../../assets/Aide.png"; 

const Services = () => {
  const scrollRef = useRef(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.data || data);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="services-section">
      <img
          src={aideIcon}
          alt="Aide"
          className="aide-icon"
          onClick={() => navigate("/contact")} 
      />

      <div className="services-header-section">
        <div className="header-text-content">
          <div className="blue-square"></div>
          <h2>NOS PROFILS ÉTUDIANTS</h2>
          <p className="services-description-section">
            Découvrez des étudiants qualifiés, motivés et prêts à relever de nouveaux défis.
          </p>
        </div>
        
        <button
            className="voir-plus-section1"
            onClick={() => navigate("/espace-entreprise")}
        >
            Voir plus
        </button>
      </div>

      <div className="services-scroll-section" ref={scrollRef}>
        <div className="services-grid-section">
          {students.map((student) => (
            <ServiceCard
              key={student.id}
              id={student.id}
              photo={
                student.photoUrl
                  ? `${import.meta.env.VITE_API_URL}/${student.photoUrl}`
                  : `${import.meta.env.VITE_API_URL}/uploads/default-avatar.png`
              }
              fullName={`${student.firstName} ${student.lastName}`}
              training={student.training}
              school={student.school}
              date={student.createdAt?.slice(0, 10)}
            />
          ))}
        </div>
      </div>

      <div className="scroll-buttons-section">
        <img src={arrowLeft} className="scroll-btn-section" alt="gauche" onClick={scrollLeft} />
        <img src={arrowRight} className="scroll-btn-section" alt="droite" onClick={scrollRight} />
      </div>
    </section>
  );
};

export default Services;