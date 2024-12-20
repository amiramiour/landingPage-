import React, { useState } from 'react';
import backgroundImage from '../../assets/photo.jpg'; // Adjust path as needed
import './Formulaire.css';


const Formulaire = () => {
  const [formData, setFormData] = useState({
    documents: {
        photoIdentite: null,
        titreSejour: null,
        certificatScolarite: null,
        diplomeEtudes: null,
        rib: null,
        justificatifDomicile: null
      },
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    prestation: '',
    domaineEtudes: '',
    intituleFormation: '',
    etablissementFormation: '',
    horaires: {
      lundi: '',
      mardi: '',
      mercredi: '',
      jeudi: '',
      vendredi: '',
      samedi: '',
      dimanche: ''
    },
    message: '',
    acceptConditions: false
    
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleHoraireChange = (jour, value) => {
    setFormData(prevState => ({
      ...prevState,
      horaires: {
        ...prevState.horaires,
        [jour]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="form-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <form 
        className="formulaire" 
        onSubmit={handleSubmit}
        
      >
        
      <h1>Formulaire inscription</h1>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="prestation">Prestation choisie</label>
          <select
            id="prestation"
            name="prestation"
            value={formData.prestation}
            onChange={handleChange}
          >
            <option value="">Sélectionnez une prestation</option>
            {/* Add your prestation options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="domaineEtudes">Domaine d'études</label>
          <select
            id="domaineEtudes"
            name="domaineEtudes"
            value={formData.domaineEtudes}
            onChange={handleChange}
          >
            <option value="">Sélectionnez un domaine</option>
            {/* Add your domain options here */}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="intituleFormation">Intitulé de formation</label>
          <input
            type="text"
            id="intituleFormation"
            name="intituleFormation"
            value={formData.intituleFormation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="etablissementFormation">Etablissement de formation</label>
          <input
            type="text"
            id="etablissementFormation"
            name="etablissementFormation"
            value={formData.etablissementFormation}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="horaires-section">
        {['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'].map((jour) => (
          <div key={jour} className="horaire-item">
            <label>{jour}</label>
            <select
              value={formData.horaires[jour.toLowerCase()]}
              onChange={(e) => handleHoraireChange(jour.toLowerCase(), e.target.value)}
            >
              <option value="">Horaires</option>
              {/* Add your time slots here */}
            </select>
          </div>
        ))}
      </div>

      <div className="form-group message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Entrer un message ..."
        />
      </div>

      <div className="form-group conditions">
        <input
          type="checkbox"
          id="acceptConditions"
          name="acceptConditions"
          checked={formData.acceptConditions}
          onChange={handleChange}
        />
        <label htmlFor="acceptConditions">
          J'accepte les <a href="#">conditions</a>
        </label>
      </div>
      <div className="documents-section">
        
        
        <div className="document-list">
        <h2>Dossier inscription</h2>
        
          <div className="document-item">
            <div className="document-circle"></div>
            <div className="document-content">
              <h3>PHOTO IDENTITE</h3>
              <label className="upload-button">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload('photoIdentite', e.target.files[0])}
                  accept="image/*" />
                  Télécharger
                </label>
              </div>
            </div>
  
            <div className="document-item">
              <div className="document-circle"></div>
              <div className="document-content">
                <h3>TITRE DE SEJOUR ETUDIANT VALIDE</h3>
                <label className="upload-button">
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload('titreSejour', e.target.files[0])}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  Télécharger
                </label>
              </div>
              </div>

          <div className="document-item">
            <div className="document-circle"></div>
            <div className="document-content">
              <h3>CERTIFICAT DE SCOLARITE</h3>
              <label className="upload-button">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload('certificatScolarite', e.target.files[0])}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                Télécharger
              </label>
            </div>
          </div>

          <div className="document-item">
            <div className="document-circle"></div>
            <div className="document-content">
              <h3>DIPLOME ETUDES</h3>
              <label className="upload-button">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload('diplomeEtudes', e.target.files[0])}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                Télécharger
              </label>
            </div>
          </div>

          <div className="document-item">
            <div className="document-circle"></div>
            <div className="document-content">
              <h3>RIB</h3>
              <label className="upload-button">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload('rib', e.target.files[0])}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                Télécharger
              </label>
            </div>
          </div>

          <div className="document-item">
            <div className="document-circle"></div>
            <div className="document-content">
              <h3>JUSTIFICATIF DOMICILE</h3>
              <label className="upload-button">
                <input
                  type="file"
                  onChange={(e) => handleFileUpload('justificatifDomicile', e.target.files[0])}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                Télécharger
              </label>
            </div>
          </div>
        </div>
      </div>


      <button type="submit" className="submit-button">
        Soumettre
   
      </button>
      
    </form>
    </div>
    
  );
};

export default Formulaire;