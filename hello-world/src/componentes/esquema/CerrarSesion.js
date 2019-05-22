import React from 'react'
import { NavLink } from 'react-router-dom'

const CerrarSesion = () => {
return (
    <ul className="right">
      <li><NavLink to='/registrar'>Registrate</NavLink></li>
      <li><NavLink to='/entrar'>Iniciar Sesion</NavLink></li>
   </ul>
)

}
export default CerrarSesion