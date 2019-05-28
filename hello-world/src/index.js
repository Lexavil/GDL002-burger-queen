import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



//si se pierde la conexion React guarda los datos de manera local en la computadora

ReactDOM.render( 
  <App />, 
  document.getElementById('root'));
  registerServiceWorker();
