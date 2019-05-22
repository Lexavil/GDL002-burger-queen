import React from 'react'
import { NavLink } from 'react-router-dom'

const AbrirSesion = () => {
return (
    <ul className="right">
      <li><NavLink to='/create'>Agregar Cuenta</NavLink></li>
      <li><NavLink to='/'>Salir</NavLink></li>
      <li><NavLink to='/'className="btn btn-floating grey lighten-1">AA</NavLink></li>
   </ul>
)

}
export default AbrirSesion