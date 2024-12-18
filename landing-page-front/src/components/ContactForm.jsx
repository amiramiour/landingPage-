import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer l'email avec EmailJS
    emailjs.send(
      'service_landing',    // ID du service
      'template_3ulxasn',   // ID du modèle
      { 
        user_email: email,    // Email saisi par l'utilisateur
        message: 'Interested in Startup'  // Message fixe
      },
      'SDymhgfb50Y19Qnkj'     // Clé publique
    )
    .then((result) => {
      console.log('Succès:', result.text);
      alert('Merci pour votre intérêt !');
      setEmail(''); // Réinitialiser le champ
    })
    .catch((error) => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="user_email" // Correspond au champ dynamique dans EmailJS
        placeholder="Entrez votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
