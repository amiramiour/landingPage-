import React, { useRef, useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/btn_blue_left.png";
import arrowRight from "../../assets/btn_blue_right.png";
import defaultImg from "../../assets/Techniciensinformatique.jpeg"; 

const Services = () => {
  const scrollRef = useRef(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/students")
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
    <section className="services">
      <div className="services-header">
        <h2>NOS PROFILS ÉTUDIANTS</h2>
        <p className="services-description">
          Découvrez des étudiants qualifiés, prêts à intervenir sur vos projets.
        </p>
        <button
          className="voir-plus"
          onClick={() => navigate("/espace-entreprise")}
        >
          Voir plus
        </button>
      </div>

      <div className="services-scroll" ref={scrollRef}>
        <div className="services-grid">
          {students.map((student) => (
            <ServiceCard
              key={student.id}
              id={student.id}
photo={`http://localhost:3000/${student.photoUrl}`}
              fullName={`${student.firstName} ${student.lastName}`}
              training={student.training}
              school={student.school}
              date={student.createdAt?.slice(0, 10)}
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
