import React from 'react';
import './style.css';

const NewBook = ({newBook, handleAddBook}) => (
    <div className="new-book">
        <i className="fas fa-plus-circle"></i>
        <div>
            <button 
                className="addButton"
                onClick={() => handleAddBook(newBook)}>
                Agregar libro
            </button>
        </div>
    </div>
)

export default NewBook;
