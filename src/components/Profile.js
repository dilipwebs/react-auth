import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";


class Profile extends Component {

  render() {
    let name;
    let email;

    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if (!localStorage.getItem('token')) {
      return <Navigate to={'/login'} />
    }

    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h3>User Profile</h3>
              <ul className="list-group">
                <li className="list-group-item"><b>Name:</b> {name}</li>
                <li className="list-group-item"><b>Email:</b> {email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
