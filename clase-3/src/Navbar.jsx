import Form from './Form';
import React from 'react';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import Card from './Card';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
             <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto">
                <Secciones/>
                <Dropdown/>
               </ul>
              <Form busqueda="Buscar Producto"/>
             </div>
            </div>
           </nav>
           <Card/>
         </>
      );
    }
  
  export default Navbar;
