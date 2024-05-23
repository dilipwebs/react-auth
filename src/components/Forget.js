import React, { Component } from 'react'
import Login from './Login';
import { Outlet, Link } from "react-router-dom";
class Forget extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form action="/action_page.php">
                <h3>Forget Password</h3>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Have an account <Link  to="/login">Login</Link></p>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forget
