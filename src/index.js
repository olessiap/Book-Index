import React from 'react';
import ReactDOM from 'react-dom';
import NewBook from './NewBook'
import BookItems from './BookItems';
import DynamicForm from './DynamicForm.js';
import Header from './Header';
import SearchBar from './SearchBar';
import SubHeader from './SubHeader';
import listaLibros from './listaLibros';
import './style.css';

export default class BookIndex extends React.Component {
    constructor () {
        super();
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.state = { data: listaLibros}
    }

    onSubmit = (model) => {
        model.id = +new Date();
        this.setState({
            data:[model, ...this.state.data]
        })
        listaLibros.push({model});
    }

    handleDeleteBook(bookToBeDeleted) {
        listaLibros.splice(bookToBeDeleted, 1);
        this.setState({data: listaLibros});
    }

    render() {
        return (
            <div className="app modal-background">
                <Header />
                <SearchBar />
                <SubHeader />
                <BookItems 
                    books={this.state.data} 
                    handleDeleteBook={this.handleDeleteBook}/>
                <DynamicForm 
                    model={[
                        {key: "name", label: "Name", props: {required: true}},
                        {key: "editor", label: "Editor", props: {required:true}},
                        {key: "author", label: "Author", props: {required:true}},
                        {key: "edition", label: "Edition", type: "number", props:{required:true}},
                    ]}
                    onSubmit = {(model) =>{this.onSubmit(model)}}
                />
            </div>
        );
    }
}
ReactDOM.render(<BookIndex books={listaLibros}/>, document.querySelector('#root'));