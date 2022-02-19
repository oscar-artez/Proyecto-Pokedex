import React from 'react'
import Modal from './Modal'

const Modals = () => {
  return (
    <div>
        <h2>Modales</h2>
        <button>Boton 1</button>
        <Modal>
          <h3>Modal 1</h3>
          <p>Hola, jajaja modal 1 content </p>  
          <img src='https://placeimg.com/400/400/animals' alt='animals'></img>
        </Modal>
    </div>
  )
}

export default Modals