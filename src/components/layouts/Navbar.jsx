import React from 'react'

import './NavBarStyle.css'
import { MdCatchingPokemon } from "react-icons/md";
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
          <MdCatchingPokemon className='icon'/>
          <h2>Clinica Veterinaria</h2>
      </div>
      <ul className='nav-menu'>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Contacto</li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  )
}

export default Navbar