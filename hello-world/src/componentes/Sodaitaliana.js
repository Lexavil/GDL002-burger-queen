import React, { Component } from 'react';



class Sodaitaliana extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Soda Italiana de Durazno'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Su eleccion es: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Soda Italiana:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Soda Italiana de Durazno">Soda italiana de Durazno</option>
              <option value="Soda Italiana de Fresa">Soda italiana de Fresa</option>
              <option value="Soda Italiana de Kiwi">Soda italiana de Kiwi</option>
              <option value="Botella de Agua">Botella de Agua</option>
              
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default Sodaitaliana;

