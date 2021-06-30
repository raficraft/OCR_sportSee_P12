import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="headerTop">
    <figure className="headerLogo">
      <Link to="/">
        <img src="../img/logo.png" alt="Logo" />
      </Link>
    </figure>

    <nav>
      <a href="#A">Acceuil</a>
      <a href="#B">Profil</a>
      <a href="#C">Réglage</a>
      <a href="#D">Communauté</a>
    </nav>
  </header>
);

export default Header;
