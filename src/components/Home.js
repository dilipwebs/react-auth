import React, { Component } from 'react'
import HomeAbout from './HomeAbout'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <ul className="list-group">
                <li className="list-group-item">Welcome to home page</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <HomeAbout />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
