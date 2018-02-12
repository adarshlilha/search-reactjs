import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Search extends Component {
    constructor(){
        super();
        this.state = { movies: [],redirect: false }
    }

    fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=72771bf8eeb4afe10715f33b981f2a23&query=${this.searchFor.value}`)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: data.results})
        });
    }

    addMovie = (e) => {
        let movieName = e.target.getAttribute('name');
        this.state.movies.map(movie => {
            if (movie.title === movieName){
                //store the movie object in store
                console.log(movie)
            }
            return null;
        });
    }

    render() {
        return (
            <div className="text-center">
                <h2>Search for a movie! </h2>
                <p>Looking for a Movie? </p>
                <p>Just type and let the magic happen! </p>
                <div>
                    <input type="text" name="search-box" ref={(text) => this.searchFor = text} onKeyUp={this.fetchMovies}
                    />
                    <ul className="movie-list text-center">
                        {this.state && this.state.movies &&
                            this.state.movies.map((movie,index) => {
                                return (
                                    <li name={movie.title} onClick={this.addMovie} key={index}>
                                        {movie.title}
                                    </li>
                                )
                            })
                        }
                </ul>
                </div>
                <div className="searched-movies">
                    {this.state.movies && this.state.movies.map((movie,index) => {
                        let image = (movie.poster_path)
                                    ? (`https://image.tmdb.org/t/p/w200/${movie.poster_path}`)
                                    : (`http://via.placeholder.com/200x200`)
                        return (
                            <div key={index} className="movie">
                                <img src={image} alt="Poster"/>
                                <div className="movie-details">
                                    <p>{movie.title}</p>
                                    {/* <p>{movie.overview}</p> */}
                                    <p>{movie.release_date}</p> 
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
