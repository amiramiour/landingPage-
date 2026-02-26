import React, { useState } from 'react';
import backgroundImage from '../../assets/photo.jpg';
import './Formulaire.css';
import vecteur from '../../assets/Vecteur.png';
const Formulaire = () => {
  const [formData, setFormData] = useState({
    documents: {}
  });

  const handleFileUpload = (documentType, file) => {
    setFormData(prevState => ({
      ...prevState,
      documents: {
        ...prevState.documents,
        [documentType]: file
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const documents = [
    { label: 'PHOTO IDENTITE', name: 'photoIdentite' },
    { label: 'TITRE DE SEJOUR ETUDIANT VALIDE', name: 'titreSejour' },
    { label: 'CERTIFICAT DE SCOLARITE', name: 'certificatScolarite' },
    { label: 'DIPLOME ETUDES', name: 'diplomeEtudes' },
    { label: 'RIB', name: 'rib' },
    { label: 'JUSTIFICATIF DOMICILE', name: 'justificatifDomicile' },
    { label: 'CHARTE D’ENGAGEMENT', name: 'charteEngagement' }
  ];

  return (
    <div
      className="candidature-wrapper"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="candidature-formulaire">
        <div className="candidature-left">
          <h1 className="candidature-title">Dépôt de candidature</h1>
        </div>

        <div className="candidature-right">
          <div className="candidature-timeline">
            {documents.map((doc, index) => (
              <div key={index} className="candidature-timeline-item">
                <div className="candidature-circle"></div>
                <div className="candidature-content">
                  <h3>{doc.label}</h3>
                  <label className="candidature-upload">
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(doc.name, e.target.files[0])}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    Télécharger <span className="candidature-download-icon"><img src={vecteur} alt="" className="" /></span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Soumettre */}
          <button className="candidature-submit">Soumettre</button>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
