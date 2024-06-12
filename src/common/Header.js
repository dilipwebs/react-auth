import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from '../components/Profile';
import axios from 'axios';

class Header extends Component {

  state = {
    user: {}
  }

  componentDidMount(){
    axios.get('/user')
    .then( (response) => {
       this.setUser(response.data)
    })
    .catch( (error) => {
      console.error(error);
    });
  }


  setUser = (user)=>{
    this.setState({user:user})
  }

  render() {
    return (
      
        <BrowserRouter>
   
        <div>
            <Nav user={this.state.user} setUser={this.setUser}/>
            <Routes>
                <Route index element={ <Home />} />
                <Route path='/profile' element={<Profile user={this.state.user} />} />
                <Route path='/login' element={<Login user={this.state.user} setUser={this.setUser} />} />
                <Route path='/register' element={<Register user={this.state.user} setUser={this.setUser}/>} />
                <Route path='/forget-password' element={<Forget />} />
            </Routes>
        </div>
        </BrowserRouter>
      
    )
  }
}

export default Header