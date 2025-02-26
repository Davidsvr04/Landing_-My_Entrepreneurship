import React from 'react';
import '../styles/Products.css';

const Products = () => {
  return (
    <section id="products" className="products">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Chorizo Tradicional</h3>
          <p>Elaborado con recetas tradicionales.</p>
        </div>
        <div className="product-item">
          <h3>Chorizo Picante</h3>
          <p>Para los amantes del picante.</p>
        </div>
        <div className="product-item">
          <h3>Chorizo Ahumado</h3>
          <p>Ahumado naturalmente.</p>
        </div>
      </div>
    </section>
  );
};

export default Products;