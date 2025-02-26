import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Bienvenidos a Sr Chorizo</h1>
        <p>Los mejores chorizos artesanales</p>
        <a href="#products">
          <button>Ver Productos</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;