import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Search from './Search';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/search' component={Search} />
        </div>
      </Router>
    )
  }
}