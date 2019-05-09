import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"https://scontent.fgdl2-1.fna.fbcdn.net/v/t1.15752-9/60013714_300431670886622_5160639309086195712_n.png?_nc_cat=104&_nc_ht=scontent.fgdl2-1.fna&oh=358182c5446e8686d8060566643970f0&oe=5D5C73BB"} className="App-logo" alt="logo" />
          </div>
          <h2>Selecciona alguna de las siguientes opciones</h2>
          <form>
  <label>
   
    <input type="text" placeholder="Ingresa el nombre del cliente" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      
        
<button class="button button1">Café</button>
<button class="button button2">Chapata</button>
<button class="button button3">Soda Italiana</button>
<button class="button button4">Ensalada</button>
<button class="button button5">Hamburguesa</button>
      </div>
    );
  }
}
      
export default App;
