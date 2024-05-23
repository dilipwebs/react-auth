import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h3>User Profile</h3>
              <ul className="list-group">
                <li className="list-group-item">Name: name</li>
                <li className="list-group-item">Email: email</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
