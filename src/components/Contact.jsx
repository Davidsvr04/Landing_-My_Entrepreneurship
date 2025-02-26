import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo Electrónico" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;