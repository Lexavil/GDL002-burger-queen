
import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './Comanda.css'
import menuBebidas from './Bebidas.json';
import menuAlimentos from './Alimentos.json';


class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: menuBebidas, pedidos: [] };

    }
    add(name, price) {
        // alert(name);
        let isNew = true;
        let order = {
            cant: 1,
            name: name,
            price: price
        };
        let newPedidos = this.state.pedidos;
        
            this.state.pedidos.forEach(item => {
            if (item.name === order.name){
                item.cant++;
                isNew = false;
                return;
            }
        });
        if (isNew){
            newPedidos.push(order);
        }
        this.setState({
            pedidos: newPedidos,
        });
     }

    showBebidas() {
        this.setState({
            menu: menuBebidas,
            state: this.state
        });
    }

    showAlimentos() {
        this.setState({
            menu: menuAlimentos,
            state: this.state
        });
    }

    delete(name, index) {
        this.state.pedidos.forEach((pedido)=>{
            if (pedido.name==name){
                if (pedido.cant>1){
                    pedido.cant--;
                }
                else{
                        this.state.pedidos.splice(index,1);
                }
                this.setState({
                    state: this.state
                });
            }
        });     
    }

    render() {
        return (
            <div>
                <div>
                    <button className='button3'><Link  to="/">INICIO</Link></button>
                    <input type='button' className='single-cat' value='Alimentos' onClick={() => { this.showAlimentos(); }} />
                    <input type='button' className='single-cat' value='Bebidas' onClick={() => { this.showBebidas(); }} />

                    {this.state.menu.map((detail, index) =>
                        <div>
                            <input type='button' className="pinWrapper " value={detail.name + detail.price} onClick={() => {
                                this.add(detail.name, detail.price);
                            }} />
                        </div>
                    )}

                   
                    





                    <button className='button1'><Link to="/servicio">Enviar</Link></button>
                   
                </div>
                <div>
                    
                    <table>
                        <h1>Productos Seleccionados:

                        </h1>
                        <tr>
                            <th>Cantidad</th>
                            <th>Producto</th>      
                         <th>Total</th>
                         <th>
                             </th>
                             </tr>




                         {/* //para hacer la suma de los productos se utilizo un metodo de suma de arreglos llamado reduce
          // TODO: Hacer return implicito.
        const totalSuma = this.props.Carta.reduce((product, price) => {// usa la informacion que tiene en comidas se la pasa a cart y se usa el metodo reduce mediante su funcionque tiene como parametros producto y precio
            return product + price.price;   //retorna el acumulador (producto) + precio del producto seleccionado + el precio del 2do
        }, 0);//0;

    
//pinta en parrafos la informacion del total de la cuenta y la suma
       return (
           <div>
            {totalCuenta}
            <p>total: $ {totalSuma}.00</p>
           </div>   
        )
    }
} */}


                        {this.state.pedidos.map((detail, index) =>
                            <tr>
                                
                                <td>
                                {detail.cant}</td><td>{detail.name}</td>
                                <td>{detail.price * detail.cant}</td>
                            <td>
                                <input type='button' value='Eliminar'onClick={()=> {this.delete(detail.name, index);}}/> </td>
                                </tr>

                        )}
                    </table>
                </div>
            </div>
        )
    }
}

export default Pedidos


class Comments extends React.Component {
    constructor(props) {
      super();
      this.state = {
        comment: ""
      }
    }
    getComment(event) {
      this.setState({
        comment: event.target.value
      });
    }
    addComment() {
      if (this.state.comment != "") {
        this.props.addComment(this.state.comment);
      }
      this.setState({
        comment: ""
      })
    }
    render() {
      let commentsNodes = this.props.comments.map((comment, i) => <div key={i}><p>{comment}</p></div>);
      return (
        <div className="comments">
                  <h1>Comments</h1>
                  <input type="text" onChange={this.getComment.bind(this)} value={this.state.comment}/>
                  <span><i className="material-icons" onClick={this.addComment.bind(this)}>message</i></span>
                  {commentsNodes}
              </div>
      )
    }
  };
  

  