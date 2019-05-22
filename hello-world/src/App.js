import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './componentes/esquema/Navbar'
import Interfaz from './componentes/interfaz/Interfaz'
import Funcional from './componentes/Proyectos/Funcional'
import Entrar from './componentes/autentificacion/Entrar'
import Registrar from './componentes/autentificacion/Registrar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
          <Navbar />
        
        <Switch>
          <Route path='/' component={Interfaz} />
          <Route path='/proyectos/:id' component={Funcional} />
          <Route path='/Entrar' component={Entrar} />
          <Route path='/Registrar' component={Registrar} />
        </Switch>
        
        </div>
        





</BrowserRouter>
        
    );
  }
}
      
export default App;
