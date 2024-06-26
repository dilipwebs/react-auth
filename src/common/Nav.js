import React, { Component } from 'react'

import { Outlet, Link } from "react-router-dom";
class Nav extends Component {

state = {
  loggedout : '',
}

logout = () => {
  localStorage.clear();
  this.props.setUser(null);
}

render() {

let buttons;
let profiles;

if (localStorage.getItem('token')) {
  buttons = (
              <div>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={this.logout}>Logout</Link>
                </li>
                
              </div>
          );

  profiles = (
                <div>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                </div>
            );
}else{
  buttons = (
        <div>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </div>
    );


    profiles = (
      <div>
        
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      </div>
  );

}

return (
  <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                
              </ul>


              <ul className="navbar-nav ms-auto">
                {buttons}
                {profiles}
              </ul>

            </div>
          </div>
        </nav>

        <Outlet />
  </div>
)
}
}

export default Nav
