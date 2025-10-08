/* App.jsx */

import React from "react";

import SimplePage from "./pages/SimplePage";
import AdvancedPage from "./pages/AdvancedPage";
import FileUploadPage from "./pages/FileUploadPage";
import LoginFormPage from "./pages/LoginFormPage";

import './App.css';

export default class App extends React.Component {
  state = {
    pageName: 'SimplePage',
    loggedInEmail: null,
  }
  
  handleLogin = login => {
    console.log('handleLogin login', login)
    this.setState({loggedInEmail: login.email})
  }

  handleLogout = e => {
    this.setState({loggedInEmail: null})
  }

    render() {
        return (
            <div className="site-wrapper">
              <nav className="navbar">
                <div className="navbar-left">
                  <button 
                    className={"nav-btn" + (this.state.pageName=='SimplePage' ? " active" : "") }  
                    id="tabSimple" 
                    onClick={()=>this.setState({pageName: 'SimplePage'})}>
                      Simple
                  </button>
                  <button 
                    className={"nav-btn" + (this.state.pageName=='AdvancedPage' ? " active" : "") }  
                    id="tabAdvanced" 
                    onClick={()=>this.setState({pageName: 'AdvancedPage'})}>
                      Advanced
                  </button>
                  <button 
                    className={"nav-btn" + (this.state.pageName=='FileUploadPage' ? " active" : "") }  
                    id="tabFile" 
                    onClick={()=>this.setState({pageName: 'FileUploadPage'})}>
                      File upload
                  </button>
                </div>
                <div className="navbar-right">
                  {!this.state.loggedInEmail && <>
                    <p>{this.state.loggedInEmail}</p> 
                    <button 
                      className={"nav-btn" + (this.state.pageName=='LoginFormPage' ? " active" : "") }  
                      id="tabLogin" 
                      onClick={()=>this.setState({pageName: 'LoginFormPage'})}>
                        Login
                    </button>
                  </>}
                  {this.state.loggedInEmail && <> 
                    <p>{this.state.loggedInEmail}</p> 
                    <button 
                      className={"nav-btn" + (this.state.pageName=='LoginFormPage' ? " active" : "") }  
                      id="tabLogin" 
                      onClick={()=>this.handleLogout()}>
                        Logout
                    </button>
                  </>}                  
                </div>
              </nav>

              <div className="container">
                {this.state.pageName=='SimplePage' && <SimplePage />}
                {this.state.pageName=='AdvancedPage' && <AdvancedPage />}
                {this.state.pageName=='FileUploadPage' && <FileUploadPage />}
                {this.state.pageName=='LoginFormPage' && 
                  <LoginFormPage onLogin={this.handleLogin} login={this.state.loggedInEmail!=null} />}
              </div>
            </div>
        )
    }
}