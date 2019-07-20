import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';

import Login from './pages/login'
import Waiting from './pages/waiting'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/thanks" exact component={Waiting} />
        </Router>
      </div>
    );
  }
}

export default App;
