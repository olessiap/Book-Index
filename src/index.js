import React from 'react';
import ReactDOM from 'react-dom';
import BookItems from './BookItems';
import Header from './Header';
import SearchBar from './SearchBar';
import SubHeader from './SubHeader';
import listaLibros from './listaLibros';
import './style.css';

const BookIndex = () => (
    <div>
        <Header />
        <SearchBar />
        <SubHeader />
        <BookItems books={listaLibros}/>
    </div>
)

// const testBooks = [
//     {
//         id:1,
//         name:'book 1',
//         editor: 'editor 1',
//         author: 'author 1',
//         edition: 1200,
//     },
//     {
//         id:2,
//         name:'book 2',
//         editor: 'editor 2',
//         author: 'author 2',
//         edition: 1200,
//     },
//     {
//         id:3,
//         name:'book 3',
//         editor: 'editor 3',
//         author: 'author 3',
//         edition: 1200,
//     }
//]

ReactDOM.render(<BookIndex books={listaLibros}/>, document.querySelector('#root'));