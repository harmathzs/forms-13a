import React, { Fragment } from "react";
export default class Checkbox extends React.Component {
    state = {
        checked: false
    }

    toggleChecked = function() {
        console.log('toggleChecked toggled', !this.state.checked)

        this.props.onCheckToggle(this.props.name) // hey Papa, I changed the value!

        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <Fragment>
                <input 
                    type="checkbox"
                    id={this.props.name} 
                    name={this.props.name} 
                    onChange={e=>this.toggleChecked()}
                />
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </Fragment>
        )
    }
}