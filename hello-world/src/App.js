
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from "./components/Intro";
import Comanda from './components/Comanda';
import Servicio from './components/Servicio';
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Gerente from "./components/Gerente";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
    
        <div >
          <header className="App-header">
              <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.15752-9/60247153_407497976749351_2078773268004732928_n.png?_nc_cat=101&_nc_eui2=AeHT-kkyCt5xeK_nkQzuJ3a0IVVN8k5SjjNBQ0FdpQOU6BSa83_mOk5Tg4NQbRdq39rM5ddgOjoS8adus87j4Pdx9yJpLzeujj3UZBzwxq2UeA&_nc_ht=scontent-dfw5-1.xx&oh=0b3ef48c29b963f92f18dd74640899b1&oe=5D92CDF1" className="App-logo" alt="logo" />
            <h1 className="App-title">Iniciar como:</h1>
               </header>
     
          
       
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/comanda" component={Comanda}/>
            <Route path="/Servicio" component={Servicio}/>   
            <Route path="/Gerente" component={Gerente}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 