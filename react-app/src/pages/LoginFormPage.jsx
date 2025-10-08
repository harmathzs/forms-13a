import React from "react";

export default class LoginFormPage extends React.Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
  }

  handleEmailChange = e => this.setState({email: e.target.value})
  handlePasswordChange = e => this.setState({password: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    // validate client-side
    if (this.state.password.length <8) {
      console.warn('Password length should be at least 8')
      return 'Password length should be at least 8'
    }

    // send to backend
    fetch('http://localhost:3333/login-email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    })
    .then(response=>{
      /*
      if (response.ok) {
        this.setState({loggedIn: true})
      }
      */
      this.setState({loggedIn: response.ok})
    })
    .catch(console.warn)
    .finally( ()=>{} )
  }

  render() {
    return (
      <>
        {this.state.loggedIn
          ? 
          <div id="content-login" className="tab-content active">
            <p>{this.state.email} is logged in! </p>
          </div>
          : 
          <div id="content-login" className="tab-content active">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="loginEmail">Email:</label>
              <input type="email" id="loginEmail" name="loginEmail" autoComplete="username" 
                onChange={this.handleEmailChange}
              required />
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" name="loginPassword" autoComplete="current-password" 
                onChange={this.handlePasswordChange}
              required />
              <button type="submit">Login</button>
            </form>
            <hr style={{ margin: "24px 0" }} />
            <div className="social-login">
              <button type="button" className="social-btn google-login">Login with Google</button>
              <button type="button" className="social-btn salesforce-login">Login with Salesforce</button>
              <button type="button" className="social-btn facebook-login">Login with Facebook</button>
            </div>        
          </div>
        }      
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update email to: ', this.state.email)

    if (!prevState.loggedIn && this.state.loggedIn) this.props.onLogin({email: this.state.email})
  }
}
