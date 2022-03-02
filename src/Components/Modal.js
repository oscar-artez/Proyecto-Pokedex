import "../Styles/Modal.css"

const Modal = ({children, isOpen, closeModal}) => {
  //Cancela el evento de propagar el cierre del modal en jerarquia,
  // en este caso cancela el cierre del modal al seleccionar el contenido.
  const handleModalContainerClick = e => e.stopPropagation();

  
  return (
    <article className={`modal ${isOpen && "is-open"} `} onClick={closeModal}>
    <div className="modal-container" onClick={handleModalContainerClick}>
      <button className="modal-close" onClick={closeModal}>X</button>
      {children}
        </div>

    </article>
  )
}

export default Modal