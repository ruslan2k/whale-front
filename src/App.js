import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import Cameras from './components/Cameras';

class App extends Component {
  render() {
    if (Auth.isAuthenticated()) {
      return <Redirect to='/cameras' />;
    }
    return <Redirect to='/login' />;
  }
}

export default App;
