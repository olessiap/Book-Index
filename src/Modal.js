import React from "react";
import './style.css';

const Modal = ({ handleClose, show, children }) => {
    let showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <div 
                className="fas fa-times exitButton"
                onClick={handleClose}>
            </div>
            <h2 className="modalHeading">Agregar libro</h2>
            <form>
                <input type="text" className="newBookName" placeholder="Nombre"></input>
                <input type="text" className="newEditorial" placeholder="Editorial"></input>
                <input type="text" className="newAuthor" placeholder="Autor"></input>
                <input type="text" className="newEdition" placeholder="Edición"></input>
            </form>
            <button 
                className="saveModalButton">
                Guardar
            </button>
        </section>
        </div>
    );
};

export default Modal;