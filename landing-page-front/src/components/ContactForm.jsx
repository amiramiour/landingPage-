import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_landing',   
      'template_3ulxasn',  
      { user_email: email, message }, 
      'SDymhgfb50Y19Qnkj' 
    )
    .then((result) => {
      alert('Email envoyé avec succès !');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'email :', error);
      alert('Une erreur est survenue.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="user_email" // Correspond à {{user_email}} dans le modèle EmailJS
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        name="message" // Correspond à {{message}} dans le modèle EmailJS
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
