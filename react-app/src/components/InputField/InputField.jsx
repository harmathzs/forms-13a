import React, { Fragment } from "react";
export default class InputField extends React.Component {
    state = {
        value: ''
    }

    setValue = function(value) {
        console.log('setValue value', value)

        this.props.onValueChange(value) // hey Papa, I changed the value!

        this.setState({value})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input 
                    type={this.props.type} 
                    id={this.props.name} 
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    required 
                    autoComplete="on" 
                    onChange={e=>this.setValue(e.target?.value)}
                />
            </Fragment>
        )
    }
}