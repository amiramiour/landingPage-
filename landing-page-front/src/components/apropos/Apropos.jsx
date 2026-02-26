import React, { useEffect } from 'react';
import { Users, GraduationCap, Briefcase, Globe, Shield } from 'lucide-react';
import bro from '../../assets/bro.png';
import pana from '../../assets/pana.png';
import amico from '../../assets/amico.png';
import content from '../../assets/Content.png';

import logoapropos from '../../assets/logoapropos.png';
import './Apropos.css';

const Apropos = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="apropos-container">
      <section className="hero-linkyjob">
  <div className="hero-content-linkyjob">
    <div className="hero-top-linkyjob">
      <h2 className="hero-title-linkyjob">Avec</h2>
      <div className="linkyjob-logo">
        <img src={logoapropos} alt="Logo LINKYJOB" />
      </div>
    </div>
    <p className="hero-description-linkyjob">
      trouvez <span className="text-blue-linkyjob">l’opportunité</span> qui vous
      <span className="text-orange-linkyjob"> correspond</span> et
      <span className="text-green-linkyjob"> facilitez</span> votre insertion professionnelle !
    </p>
    <button className="hero-button-linkyjob">Savoir plus</button>
  </div>

  <div className="hero-image-linkyjob">
    <img src={content} alt="Illustration opportunités internationales" />
  </div>
</section>





      <section className="platform-section animate-on-scroll from-left">
  <div className="platform-illustration">
    <img src={amico} alt="Illustration étudiants" className="illustration" />
  </div>
  <div className="platform-content">
    <p className="platform-description">
      <strong className="platform-bold">LinkyJob</strong> est une plateforme conçue pour <span className="text-blue-linkyjob">aider les étudiants internationaux</span> à trouver un <span className="text-blue-linkyjob">emploi</span> en parallèle de leurs études.
    </p>
  </div>
</section>


      {/* Opportunities Section */}
      <section className="opportunities-section animate-on-scroll from-right">
  <div className="opportunities-content">
    <p className="opportunities-description">
      Offre des <span className="text-orange-linkyjob">opportunités</span> variées, <br />
      allant de missions liées à votre <span className="text-orange-linkyjob">domaine d’études</span> à des <span className="text-orange-linkyjob">tâches polyvalentes</span>.
    </p>
  </div>
  <div className="opportunities-illustration">
    <img src={bro} alt="Illustration opportunités" className="illustration" />
  </div>
</section>


      {/* Security Section */}
      <section className="security-section animate-on-scroll from-left">
  <div className="security-illustration">
    <img src={pana} alt="Illustration sécurité" className="illustration" />
  </div>
  <div className="security-content">
    <p className="security-description">
      <span className="text-green-linkyjob">Sécurisée</span> et <span className="text-green-linkyjob">conforme</span> aux <br />
      <span className="text-green-linkyjob">réglementations</span> en vigueur.
    </p>
  </div>
</section>

    </div>
  );
};

export default Apropos;
