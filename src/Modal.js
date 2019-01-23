import React from "react";
import './style.css';


const Modal = ({ handleClose, handleChange, handleSubmit, show, children, props }) => {

    let showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <div 
                className="fas fa-times exitButton"
                onClick={handleClose}
                >
            </div>
            <h2 className="modalHeading">Agregar libro</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="newBookName" 
                    placeholder="Nombre" 
                    onChange={handleChange}
                    name="name">
                </input>
                <input 
                    type="text" 
                    className="newEditorial" 
                    placeholder="Editorial"
                    onChange={handleChange}
                    name="editor">
                </input>
                <input type="text" className="newAuthor" placeholder="Autor"></input>
                <input type="text" className="newEdition" placeholder="Edición"></input>
                <input type="submit" className="saveModalButton" value="Guardar" />
            </form>
        </section>
        </div>
    );
};

export default Modal;