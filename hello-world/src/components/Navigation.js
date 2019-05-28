import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Comanda">Comanda</NavLink>
      <NavLink to="/Servicio">Cocina</NavLink>
      <NavLink to="/gerencia">Gerente</NavLink>
    </div>
    
   
  );
};

export default Navigation
