import "../Styles/Modal.css"

const Modal = ({children}) => {
  return (
    <article className="modal is-open">
    <div className="modal-container">
      <button class="modal-close">X</button>
        </div>
    {children}
    </article>
  )
}

export default Modal