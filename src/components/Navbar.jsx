import React from 'react';
import logo from '../assets/images/Logo_Sr_Chorizo.png'; 
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;