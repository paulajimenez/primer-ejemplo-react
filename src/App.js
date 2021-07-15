import {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import './App.css';

import React from 'react';
import './App.css';

function App() {
  //Obtener Fecha
  const fecha = new Date().getFullYear();

  //State 1 --> Crear listadop de productos inicial
  const [ productos, setProductos ] = useState([
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa Vue', precio: 55},
    {id: 3, nombre: 'Camisa JS', precio: 51},
  ]);

  //State 2 --> Crear Carrito. Inicialmente está vacío
  const [ carrito, agregarProducto ] = useState([]);

  return (
    <Fragment>
      <Header titulo = 'Tienda Virtual'/>
      <h2>Listado de Productos</h2>
        <ul>

          {productos.map(esteproducto => {
            return(
              <Producto producto = {esteproducto}
                key = {esteproducto.id}
                productos = {productos}
                carrito = {carrito}
                agregarProducto = {agregarProducto}
              />)
            })
          }
          </ul>
      <Carrito carrito = {carrito} agregarProducto = {agregarProducto}/>
      <Footer fecha = {fecha}/>
    </Fragment>
  );
}

export default App;
