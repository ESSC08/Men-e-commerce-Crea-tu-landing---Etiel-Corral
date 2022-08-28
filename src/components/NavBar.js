import React from 'react'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
  return (
    <div>
        <h2>Contenido de lista</h2>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Acerca de</li>
        <CartWidget/>
        <ItemListContainer greeting={"Agregar aqui nombre de tienda"}/>
    </div>
  )
}

export default NavBar