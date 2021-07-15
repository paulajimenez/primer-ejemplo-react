import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className = "carrito">
    <h2>Carrito de la compra</h2>
    <ul>
      {carrito.length === 0
        ? <p>No hay elementos</p>
        : carrito.map(producto => (
                <Producto 
                    key = {producto[0].id}
                    producto = {producto[0]}
                    carrito = {carrito}
                    agregarProducto = {agregarProducto}
                    />
                ))
      }
      </ul>
    </div>
    );

export default Carrito;