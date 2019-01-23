import React from 'react';
import Modal from './Modal';
import './style.css';

export default class NewBook extends React.Component {
    constructor (props) {
        super(props);
        this.state = {show:false}
    }

    showModal = () => {
        this.setState( { show:true });
    };

    hideModal = () => {
        this.setState( { show:false });
    };

    render() {
        return ( <div>
            <Modal show={this.state.show} handleClose={this.hideModal}>
            </Modal>
            <div className="new-book">
                <i className="fas fa-plus-circle"
                onClick={this.showModal}>
                </i>
                <div>
                    <button 
                        className="addButton"
                        onClick={() => this.props.handleAddBook(this.props.newBook)}>
                        Agregar libro
                    </button>
                </div>
            </div>
        </div>
        )
    }

}
