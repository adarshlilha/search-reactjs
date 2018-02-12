import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {redirectToSearch: false,movies:[]}
  }

  fetchMovies = (searchText) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=72771bf8eeb4afe10715f33b981f2a23&query=${searchText}`)
    .then(data => data.json())
    .then(data => {
        this.setState({movies: data.results})
    });
}

  search = () => {
    this.setState({redirectToSearch: true})
  }

  render() {
    const {redirectToSearch} = this.state;
    if (redirectToSearch){
      return <Redirect to = '/search'/>
    }
    return (
      <div className="app-root">
      <div className="text-center body">
        <h1>Movie Search</h1>
        <p>Search for any movie!</p>
        <button onClick={this.search} className="btn">Search for a Movie!</button>
      </div>

      </div>
    );
  }
}

