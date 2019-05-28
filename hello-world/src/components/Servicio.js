import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import menuBebidas from './Comanda.json';

class Servicio extends Component {
    constructor(props) {
        super(props);
        this.state = { comanda: menuBebidas };

    }

    render() {
        return (

            <div>
                {this.state.comanda.map((detail, index) => 
                                    <table>
                        <tr><th>Cantidad</th><th>Producto</th>       <th>Total</th><th></th></tr>
                {detail.map((detail, index) =>
                            <tr><td>{detail.cantid}</td><td>{detail.name}</td><td>{detail.price * detail.cantid}</td>
                            <td></td></tr>

                        )}
                                            </table>
                )}
                <div>
                    Cocina

                    <button className='button5'>
                        
                    
<Link to="/">Cerrar Sesión</Link></button>
                </div>
            </div>


        )
    }
}
export default Servicio