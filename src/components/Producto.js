import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {
  //Extraemos las props
  const {id, nombre, precio} = producto;

  //Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id);
    agregarProducto([...carrito, producto]);
  }

  //Eliminar producto del carrito
  const eliminarProducto = id => {  
    const productos = carrito.filter(producto => producto[0].id !== id);
    console.log(productos);
    agregarProducto(productos);

  }

  return (  
          <li>
            <span>{id} - {nombre}: {precio}€</span>
            {productos
              ?
                (<button onClick = {() => {seleccionarProducto(id)}}>Comprar</button>)
              :
              (<button onClick = {() => {eliminarProducto(id)}}>Eliminar</button>)
            }
          </li>
    );
}

export default Producto;