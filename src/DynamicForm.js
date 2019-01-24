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
                <div key={key}>
                    <label
                        key={"l" + m.key}
                        htmlFor={m.key}>
                        {m.label}
                    </label>
                    <input {...props}
                        ref={(key)=>{this[m.key]=key}}
                        type={type}
                        key={"i" + m.key}
                        onChange={(e)=>{this.onChange(e, key)}}
                    />
                </div>
            );
        });
        return formUI;
    }
    
    render() {
        return(
            <div>
                <form onSubmit={(e)=>{this.onSubmit(e)}}>
                     {this.renderForm()}
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}