import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';


class Login extends Component {

  state = {
    email     : '',
    password  : '',
    message   : '',
  }

  //Login form submit
  formSubmit = (e) => {
    e.preventDefault();

    const data = { email : this.state.email, password : this.state.password};

    axios.post('/login', data)
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
    if (this.state.loggedIn  || localStorage.getItem('token')) {
      return <Navigate to={'/profile'} />
    }


    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form onSubmit={this.formSubmit}>
                <h3>Login account</h3>
                <div className="mb-3 mt-3">
                  <label className="form-label">Email:</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter email"  required="" onChange={(e)=>this.setState({email:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" name="password"  className="form-control" placeholder="Enter password"   required=""  onChange={(e)=>this.setState({password:e.target.value})} />
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
