import React, { useEffect } from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'

const Modals = () => {
 const [isOpenModal1, openModal1, closeModal1] = useModal(false);
 const [isOpenModal2, openModal2, closeModal2] = useModal(false);

 useEffect(() => {
  modalNewsletter()
 }, [])
 
 const modalNewsletter = () =>{
   setTimeout(() => {
    openModal2(true);
   }, 3000);
 }

  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen= {isOpenModal1} closeModal ={closeModal1}>
          <h3>Modal 1</h3>
          <p>Hola, soy el contenido de prueba de un modal </p>  
          <img src='https://placeimg.com/400/400/tech' alt='tech'></img>
        </Modal>
        <Modal isOpen= {isOpenModal2} closeModal ={closeModal2}>
          <h3>Modal 2</h3>
          <p>Hola, soy el contenido de prueba de un modal tipo newsletter  </p>  
          <img src='https://placeimg.com/400/400/tech' alt='tech'></img>
        </Modal>
    </div>
  )
}

export default Modals