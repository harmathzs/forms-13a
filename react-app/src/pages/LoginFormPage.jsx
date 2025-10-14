import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";

import FacebookLogin from 'react-facebook-login';

export default class LoginFormPage extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    loggedIn: null,
    facebookAppId: '766382942775386',
  }

  handleEmailChange = e => this.setState({email: e.target.value})
  handlePasswordChange = e => this.setState({password: e.target.value})

  handleGoogleLogin = login => {
    console.log('handleGoogleLogin login', login)
    this.setState({loggedIn: true, name: login.userInfo.name, email: login.userInfo.email})
  }

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
     console.log('fetch response', response)
     if (!response.ok) this.props.onLogout(false)
      this.setState({loggedIn: response.ok})
    })
    .catch(console.warn)
    .finally( ()=>{} )
  }

  handleGoogleLoginButtonClick = e => {
    const {clientId} = this.props
    console.log('clientId', clientId)

    const login = useGoogleLogin({
      flow: "auth-code", // code-based Oauth2 flow
      redirect_uri: "http://localhost:5173",
      scope: "openid email profile",

      onError: console.warn,
      onSuccess: res => {
        console.log('useGoogleLogin res', res)
      }
    })
  }

  responseFacebook = response => {
    console.log('responseFacebook response', response)
    /*
      {
          "name": "Harmath Zsolt",
          "email": "harmathzs@gmail.com",
          "picture": {
              "data": {
                  "height": 50,
                  "is_silhouette": false,
                  "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10163438477154798&height=50&width=50&ext=1763027799&hash=AT_Hh4aN5JMBYtqyYC5DEAWw",
                  "width": 50
              }
          },
          "id": "10163438477154798",
          "userID": "10163438477154798",
          "expiresIn": 3802,
          "accessToken": "EAAK5BW8Q6FoBPv9M4tweQsK3xZB2tZAI7XHr1vwWclEkwrCOZB8LZA4lchb6aP09xMtdWNE0Rrpka9XcaRyOmilMqYZBU2lCFfh4gQ03oQSGw8kSIrtKnbQKZCT0GTq6SK8ZAvzSrAKjrdZCDazpxsyDxLlxcsIATW1czmzvVi9liON7Ubz5QFq0SzI5xOSYZAockXs9DwjyzbXtHHS18uIguHYHWtVXeZA9UZD",
          "signedRequest": "epSy_ECXhuyrPzJIUBg5-eVO9otxpxaZs3e1bIMbNNI.eyJ1c2VyX2lkIjoiMTAxNjM0Mzg0NzcxNTQ3OTgiLCJjb2RlIjoiQVFDTTFVZTZsa2ZIVVRUbkU0bUJUMXkxX0JBY0I0aFBGOFk5ckVvMTUzYUN5d25HcVhKeGxEeWs4azJvRlFsa0FOR0tPeGxNRVp4NTNrTG5FS0VEc3VOMDJ3N2ViTkZZUXM0eklrcWczXzBTR0ZmYWUyQk5aTGo1VDVtNVhBOWMyU09TU2xCTnBBSVM1UlNUczRZWE5uWTM0MTFiV0lCcG0ybm9Cdlp3T0FhQllhTkFLQjEySXJ0ZG92aFRDYl9aazdBeE4xc29BZHRRaFFkQUhCbm9VQlNxcnZnVDY1OGppaVV3WXI0V3J4bFFneG9BNGhBd0JWVXg1Z2Y2YXlpN0VqSnJPVF92cXNaeEd2R1RaSFgzMVVfeWJBemw0TS1veDZPczA2U2FrUEV3T3JPWE1aMTlTTFgwTWt0aWRfWHM2VTZqNmVLREszZC1pOVk4NV8xR0gyb0hIeDAtY3lybURfSGdMeDl5UnBWZ0R3IiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE3NjA0MzU3OTh9",
          "graphDomain": "facebook",
          "data_access_expiration_time": 1768211798
      }
    */
  }

  render() {
    return (
      <>
        {this.state.loggedIn
          ? 
          <div id="content-login" className="tab-content active">
            <p>{this.state.name.length>=1 ? this.state.name : this.state.email} is logged in! </p>
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
              <GoogleLogin clientId={this.props.clientId} onGoogleLogin={this.handleGoogleLogin} />
              <button type="button" className="social-btn salesforce-login">Login with Salesforce</button>
              <FacebookLogin
                appId={this.state.facebookAppId}
                fields="name,email,picture"
                callback={this.responseFacebook}
                icon="fa-facebook"
                className="social-btn facebook-login"
              />
            </div>  
            {this.state.loggedIn === false && <p>You are NOT logged in yet, sorry. </p>}
          </div>
        }      
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('update email to: ', this.state.email)

    if (!prevState.loggedIn && this.state.loggedIn) this.props.onLogin({email: this.state.email})

    if (prevProps.login && !this.props.login) this.setState({loggedIn: false})
  }
}
