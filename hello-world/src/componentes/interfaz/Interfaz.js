import React, { Component } from 'react';
import Notificacion from './Notificacion';

    class Interfaz extends Component {
    render(){
        return (
            <div className="interfaz container">
            <div className= "row">
            <div className="col s12 m6"></div>
            <div className="col s12 m5 offset-m1"></div>
            <Notificacion />
            </div>
            </div>
        )
    }
}