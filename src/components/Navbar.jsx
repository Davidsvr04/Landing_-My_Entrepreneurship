import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Chorizos Deliciosos</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;