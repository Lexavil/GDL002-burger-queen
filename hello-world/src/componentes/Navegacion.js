import React, { Component } from 'react';

class Navegacion extends Component {
render() {
    return(
   <nav className="topnav">
  
          <a href=""> 
          {this.props.titulo}
          </a>
       </nav> 
       )
     }
    }
    export default Navegacion;