import React from 'react';

export default class DynamicForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }
    
    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    renderForm = () => {
        let model = this.props.model;
        
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type;
            let props = m.props || {};

            return (
                <div 
                    key={key}
                    className="dynamic-form-line"
                >
                    <input {...props}
                        ref={(key)=>{this[m.key]=key}}
                        type={type}
                        key={"i" + m.key}
                        onChange={(e)=>{this.onChange(e, key)}}
                        placeholder={m.key}
                    />
                </div>
            );
        });
        return formUI;
    }
    
    render() {
        return(
            <div className="dynamic-form-main">
            <h2 className="dynamic-form-heading">Agregar libro</h2>
                <form 
                    className="dynamic-form-input"
                    onSubmit={(e)=>{this.onSubmit(e)}}
                >
                     {this.renderForm()}
                    <div>
                        <button 
                            type="submit"
                            className="save-dynamic-form-button"
                            >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}