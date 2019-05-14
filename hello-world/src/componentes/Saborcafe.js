import React, { Component } from 'react';



class Saborcafe extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'torrificado'};
  
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
            Cafe:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="cafeAmericano">Cafe Americano</option>
              <option value="torrificado">Cafe Torrificado</option>
              <option value="italiano">Cappuccino Italiano</option>
              <option value="expres">Esspreso</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default Saborcafe;

