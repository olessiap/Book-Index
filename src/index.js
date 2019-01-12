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
    constructor () {
        super();
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.state = { bookItems: listaLibros}
    }

    handleDeleteBook(bookToBeDeleted) {
        let deletedItems = listaLibros.splice(bookToBeDeleted, 1);
        this.setState({bookItems: listaLibros});
        console.log(this.state);
    }

    // removeItem (itemIndex) {
    //     todoItems.splice(itemIndex, 1);
    //     this.setState({todoItems: todoItems});
    //   }

    render() {
        return <div className="app">
            <Header />
            <SearchBar />
            <SubHeader />
            <BookItems 
                books={listaLibros} 
                handleDeleteBook={this.handleDeleteBook}/>
            <NewBook />
        </div>
    }
}


ReactDOM.render(<BookIndex books={listaLibros}/>, document.querySelector('#root'));