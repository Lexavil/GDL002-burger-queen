import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion';


import Saborcafe from './componentes/Saborcafe';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <img src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.15752-9/60247153_407497976749351_2078773268004732928_n.png?_nc_cat=101&_nc_ht=scontent-qro1-1.xx&oh=d622c15bcd2c4126dd985714ffbf8984&oe=5D6B40F1"} className="App-logo" alt="logo" />
        <Navegacion titulo="Mesero"/>  
        
        </div>
        
 <div className="cafe">
  <Saborcafe/>
 
</div>
      
 

</div>


    )
  }
}
      
export default App;
