import React from "react";

export default class LoginFormPage extends React.Component {
  render() {
    return (
      <div id="content-login" className="tab-content active">
        <h2>Login</h2>
        <form>
          <label htmlFor="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="loginEmail" autoComplete="username" />
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" name="loginPassword" autoComplete="current-password" />
          <button type="submit">Login</button>
        </form>
        <hr style={{ margin: "24px 0" }} />
        <div className="social-login">
          <button type="button" className="social-btn google-login">Login with Google</button>
          <button type="button" className="social-btn salesforce-login">Login with Salesforce</button>
          <button type="button" className="social-btn facebook-login">Login with Facebook</button>
        </div>
      </div>
    );
  }
}
