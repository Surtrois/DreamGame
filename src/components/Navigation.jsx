import React, { useState } from 'react';
import "./css/Navigation.css"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className={`menu-burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-burger-line" />
        <div className="menu-burger-line" />
        <div className="menu-burger-line" />
        <div className="menu-burger-line" />
      </div>
      <ul className={`navigation-menu ${isOpen ? 'open' : ''}`}>
        <li className="navigation-item">
          <a href="/Home" className="navigation-link">
            Accueil
          </a>
        </li>
        <li className="navigation-item">
          <a href="/JeuxVideo" className="navigation-link">
            Jeux vidéo
          </a>
        </li>
        <li className="navigation-item">
          <a href="/Manga" className="navigation-link">
            Manga
          </a>
        </li>
        <li className="navigation-item">
          <a href="/ProduitsDerivés" className="navigation-link">
            Produits Derivés
          </a>
        </li>
        <li className="navigation-item">
          <a href="/About" className="navigation-link">
            A propos
          </a>
        </li>
        <li className="navigation-item">
          <a href="/News" className="navigation-link">
            News
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;