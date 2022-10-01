import React from 'react';
import Form from '../layouts/Form';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';
import CartWidget from './CartWidget';




const Navbar = ({contador}) => {
  const listDrowdon = ["Hombre", "Mujer", "Unisex",]
  
    return (
        <> 
          {
            /*
              Comentario!
            */
          }
            <nav className="navbar navbar-expand-lg navbar-dark btn btn-dark">
             <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                    <Secciones/>
                    <Dropdow lista={listDrowdon}/>
                  </ul>
                  <Form busqueda="Buscar Producto"/>
                  <CartWidget/> 
                </div>
              </div>
            </nav>
        </>
    );
}

export default Navbar;