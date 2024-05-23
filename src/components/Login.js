import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import Forget from './Forget';
class Login extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form action="/action_page.php">
                <h3>Login account</h3>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Forget password <Link  to="/forget-password">Click here</Link></p>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
