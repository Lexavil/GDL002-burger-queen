import React, { Component } from 'react';
import Notificacion from './Notificacion';
import Lista from '../Proyectos/Lista';

    class Interfaz extends Component {
    render(){
        return (
            <div className="interfaz container">
            <div className="row">
            <div className="col s12 m6"></div>
            <Lista/>
            <div className="col s12 m5 offset-m1"></div>
            <Notificacion />
            </div>
            </div>
        )
    }
}

export default Interfaz