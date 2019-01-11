import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const BookItems = ( {books} ) => (
    <table className="book-list">
        <tbody>
            {books.map(book => (
                <tr className="book-list-item" key={book.id}>
                    <td className="book-name">{book.name}</td>
                    <td className="book-editor">{book.editor}</td>
                    <td className="book-author">{book.author}</td>
                    <td className="book-edition">{book.edition}</td>
                    <td className="fas fa-times deleteButton"></td>
                </tr>
            ))}
        </tbody>
    </table>
);

BookItems.PropTypes = {
    books: PropTypes.array
};

export default BookItems;