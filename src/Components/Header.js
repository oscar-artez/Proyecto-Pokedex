import React from 'react'

const Header = () => {
  return (
    <header>
    <h2>Mi aplicacion sin context</h2>
    <h3>Mi cabecera</h3>
    <select name='language'>
    <option value="es">ES</option>
    <option value="en">EN</option>
    </select>
    <input type="radio" name='theme' id='light' value="light"/>
    <label for="light">Claro</label>
    <input type="radio" name='theme' id='dark' value="dark"/>
    <label for="dark">Oscuro</label>
    <button>Iniciar sesión</button>
    </header>
  )
}

export default Header