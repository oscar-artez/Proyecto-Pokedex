import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'

const Modals = () => {
 const [isOpenModal1, openModal1, closeModal1] = useModal(false);
 const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen= {isOpenModal1} closeModal ={closeModal1}>
          <h3>Modal 1</h3>
          <p>Hola, jajaja modal 1 content </p>  
          <img src='https://placeimg.com/400/400/animals' alt='animals'></img>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen= {isOpenModal2} closeModal ={closeModal2}>
          <h3>Modal 2</h3>
          <p>Hola, jajaja modal 2 content </p>  
          <img src='https://placeimg.com/400/400/animals' alt='animals'></img>
        </Modal>
    </div>
  )
}

export default Modals