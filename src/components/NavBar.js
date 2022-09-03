import React from 'react'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
  return (
    <body>
    {<header>
      <ItemListContainer greeting={"Tienda Enda"}/>
    </header>}
    <nav>
        <h2>Lista de opciones</h2>
        <ul>
        <li><a href="#" title="Boton" target="_blank"> Inicio </a></li>
        <li><a href="#" title="Boton" target="_blank"> Productos </a></li>
        <li><a href="#" title="Boton" target="_blank"> Contacto </a></li>
        <li><a href="#" title="Boton" target="_blank"> Acerca de </a></li>
        </ul>
        <CartWidget/>
    </nav>
    </body>
  )
}

export default NavBar