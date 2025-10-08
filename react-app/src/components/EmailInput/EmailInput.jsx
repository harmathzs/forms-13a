import React, { Fragment } from "react";
export default class EmailInput extends React.Component {
    state = {
        email: ''
    }

    setEmail = function(email) {
        console.log('setEmail email', email)

        this.props.onEmailChange(email) // hey Papa, I changed the email!

        this.setState({email})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="simpleEmail">Email address:</label>
                <input type="email" id="simpleEmail" name="simpleEmail" placeholder="name@example.com" required autoComplete="on" 
                    onChange={e=>this.setEmail(e.target?.value)}
                    onBlur={this.handleEmailBlur}
                />
            </Fragment>
        )
    }
}