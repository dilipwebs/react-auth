import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

class Register extends Component {
  state = {
    name     : '',
    email     : '',
    password  : '',
    password_confirmation  : '',
    message   : '',
  }

  //Register form submit
  formSubmit = (e) => {
    e.preventDefault();

    const data = { name : this.state.name, email : this.state.email, password : this.state.password, password_confirmation : this.state.password_confirmation};

    axios.post('/register', data)
    .then( (response) => {
        localStorage.setItem('token',response.data.token);
        this.setState({
          loggedIn:true,
        })
        this.props.setUser(response.data.user)
    })
    .catch( (error) => {
      console.error(error);
    });

  }

  render() {

    
    //redirect to profile after login
    if (this.state.loggedIn || localStorage.getItem('token')) {
      return <Navigate to={'/profile'} />
    }

    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form onSubmit={this.formSubmit}>
                <h3>Register account</h3>
                <div className="mb-3 mt-3">
                  <label className="form-label">Name:</label>
                  <input type="text" className="form-control" placeholder="Enter Name" name="name" onChange={(e)=>this.setState({name:e.target.value})} />
                </div>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e)=>this.setState({email:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" className="form-control"placeholder="Enter password" name="password" onChange={(e)=>this.setState({password:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password:</label>
                  <input type="password" className="form-control" placeholder="Confirm password" name="password_confirmation" onChange={(e)=>this.setState({password_confirmation:e.target.value})} />
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
