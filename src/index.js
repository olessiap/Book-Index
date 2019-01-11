import React from 'react';
import ReactDOM from 'react-dom';
import NewBook from './NewBook'
import BookItems from './BookItems';
import Header from './Header';
import SearchBar from './SearchBar';
import SubHeader from './SubHeader';
import listaLibros from './listaLibros';
import './style.css';

const BookIndex = () => (
    <div className="app">
        <Header />
        <SearchBar />
        <SubHeader />
        <BookItems books={listaLibros}/>
        <NewBook />
    </div>
)


ReactDOM.render(<BookIndex books={listaLibros}/>, document.querySelector('#root'));