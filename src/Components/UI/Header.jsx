import React from 'react';
import './Header.css'; // Asegúrate de tener un archivo CSS para el estilo del encabezado

function Header() {
  return (
    <header className="header">
      <div className="header-title">CampusLink</div>
      <nav className="nav">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Grupos</button>
        <button className="nav-button">Artículos</button>
        <button className="nav-button">Comunicados</button>
      </nav>
      <button className="profile-button">Mi Perfil</button>
    </header>
  );
}

export default Header;


