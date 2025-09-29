/* SimplePage.jsx */
import React from "react";
import EmailInput from "../components/EmailInput/EmailInput";
export default class SimplePage extends React.Component {
    state = {
        email: ''
    }



    handleFormSubmit = e => {
        e.preventDefault()

        //console.log('handleFormSubmit e', e)
        console.log('email', this.state.email)
    }

    handleEmailBlur = e => {
        console.log('handleEmailBlur e', e)
    }

    handleEmailChange = email => {
        console.log('handleEmailChange email', email)
        this.setState({email})
    }

    handleFormReset = e => {
        console.log('handleFormReset e', e)
        this.setState({email: ''})
    }

    render() {
        return (
            <div id="content-simple" className="tab-content active">
            <h2>Simple Email Form</h2>
                <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
                    <EmailInput onEmailChange={this.handleEmailChange} />
                    <button type="submit">Submit</button>
                    <input type="reset" value={"Reset"} />
                </form>
            </div>
        )
    }
}