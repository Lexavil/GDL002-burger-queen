import React from 'react'
import { Link } from 'react-router-dom'
import AbrirSesion from './AbrirSesion'
import CerrarSesion from './CerrarSesion'

const Navbar = () => {
return (
    <nav className="nav-wrapper pink darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">La Vitteria</Link>
        <AbrirSesion />
        <CerrarSesion />
      
      </div>
   </nav>
)

}
export default Navbar