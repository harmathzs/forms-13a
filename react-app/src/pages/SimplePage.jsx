/* SimplePage.jsx */
import React from "react";
export default class SimplePage extends React.Component {
    state = {
        email: ''
    }

    setEmail = function(email) {
        console.log('setEmail email', email)
        this.setState({email})
    }

    handleFormSubmit = e => {
        e.preventDefault()

        //console.log('handleFormSubmit e', e)
        console.log('email', this.state.email)
    }

    handleEmailBlur = e => {
        console.log('handleEmailBlur e', e)
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="simpleEmail">Email address:</label>
                    <input type="email" id="simpleEmail" name="simpleEmail" placeholder="name@example.com" required autoComplete="on" 
                        onChange={e=>this.setEmail(e.target?.value)}
                        onBlur={this.handleEmailBlur}
                    />
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"} />
                </form>
            </div>
        )
    }
}