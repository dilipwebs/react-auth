import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form action="/action_page.php">
                <h3>Register account</h3>
                <div className="mb-3 mt-3">
                  <label className="form-label">Name:</label>
                  <input type="email" className="form-control" id="name" placeholder="Enter Name" name="Name" />
                </div>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password:</label>
                  <input type="password" className="form-control" id="pwd" placeholder="Confirm password" name="pswd" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Have an account <Link  to="/login">Login</Link></p>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
