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
                  <button 
                    className={"nav-btn" + (this.state.pageName=='LoginFormPage' ? " active" : "") }  
                    id="tabLogin" 
                    onClick={()=>this.setState({pageName: 'LoginFormPage'})}>
                      Login
                  </button>
                </div>
              </nav>

              <div className="container">
                {this.state.pageName=='SimplePage' && <SimplePage />}
                {this.state.pageName=='AdvancedPage' && <AdvancedPage />}
                {this.state.pageName=='FileUploadPage' && <FileUploadPage />}
                {this.state.pageName=='LoginFormPage' && <LoginFormPage />}
              </div>
            </div>
        )
    }
}