import React, { Component } from 'react'
import Nav from './Nav'
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from '../components/Profile';

class Header extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <div>
            <Nav />
            <Routes>
                <Route index element={ <Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forget-password' element={<Forget />} />
            </Routes>
        </div>
        </BrowserRouter>
      
    )
  }
}

export default Header