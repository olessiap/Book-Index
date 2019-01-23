import React from 'react';
import ReactDOM from 'react-dom';
import NewBook from './NewBook'
import BookItems from './BookItems';
import Header from './Header';
import SearchBar from './SearchBar';
import SubHeader from './SubHeader';
import listaLibros from './listaLibros';
import './style.css';

export default class BookIndex extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            bookItems: listaLibros
        };

        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
    }

    handleAddBook(newBook) {
        listaLibros.push({
        id: listaLibros.length+1,
        name: "test book",
        editor: "test editor",
        author: "Daddy Yankee",
        edition: 9999
        });

        this.setState({bookItems: listaLibros});
    }
    handleDeleteBook(bookToBeDeleted) {
        listaLibros.splice(bookToBeDeleted, 1);
        this.setState({bookItems: listaLibros});
    }

    render() {
        return <div className="app modal-background">
            <Header />
            <SearchBar />
            <SubHeader />
            <BookItems 
                books={listaLibros} 
                handleDeleteBook={this.handleDeleteBook}/>
            <NewBook handleAddBook={this.handleAddBook}/>
        </div>
    }
}


ReactDOM.render(<BookIndex books={listaLibros}/>, document.querySelector('#root'));