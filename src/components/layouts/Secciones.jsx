import React from 'react';

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
    <a className="nav-link active" href="#">Inicio
      <span className="visually-hidden">(current)</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Hombres</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Mujeres</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Sobre Nosotros</a>
  </li> 
        </>
    );
}

export default Secciones;