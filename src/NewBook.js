import React from 'react';
import Modal from './Modal';
import listaLibros from './listaLibros';
import './style.css';

export default class NewBook extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            show:false,
            name: '',
            bookItems: listaLibros,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showModal = () => {
        this.setState( { show:true });
    };

    hideModal = () => {
        this.setState( { show:false });
    };

    handleChange(event) {
        console.log(event);
        let target = event.target;
        let value = target.value;
        let name = target.name
        
        this.setState({ [name]: event.value});
        
        
        listaLibros.push({
            id:listaLibros.id+1,
            name: value,
            editor: value
        })
        
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.setState({bookItems: listaLibros});
    //     //console.log("submit: " + listaLibros);
    // }

    render() {
        return ( <div>
            <Modal 
                show={this.state.show} 
                handleClose={this.hideModal} 
                //handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                value={this.name}>
            </Modal> 
            <div className="new-book">
                <i className="fas fa-plus-circle"
                onClick={this.showModal}>
                </i>
                <div>
                    <button 
                        className="addButton"
                        onClick={() => this.props.handleAddBook(this.newBook)}>
                        Agregar libro
                    </button>
                </div>
            </div>
        </div>
        )
    }

}
