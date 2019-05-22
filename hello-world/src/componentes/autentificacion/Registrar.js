import React, { Component } from 'react'

export class Registrar extends Component {
    state = {
        email: '',
        password: '',
        Name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
        <div className="container">
         <form onSubmit={this.handleSubmit} className="white">
           <h5 className="grey-text text-darken-3"> Entrar</h5>
           <div className="input-field">
            <label htmlFor="email"> Correo Electronico</label>
            <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="password"> Contraseña</label>
            <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlFor="Name"> ¿Cuál es tu nombre?</label>
            <input type="Name" id="Name" onChange={this.handleChange} />
            </div>
        <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0"> Entrar</button>
        
        
        </div>
        </form>
        </div>
        )
    }
}

export default Registrar