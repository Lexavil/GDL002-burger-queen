import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';




function Home() {
    return (
        <div >
            <div className='header'>
                <div>
                    <div className='card'> Iniciar como: </div>
                </div>

            </div>
            <div>
                <button className='button2'><Link to="/Comanda">Mesero</Link></button>
                <div>






                <button className='button1'><Link  to="/servicio">Cocina</Link></button>
                </div>
</div>
        </div>


    )
}

export default Home