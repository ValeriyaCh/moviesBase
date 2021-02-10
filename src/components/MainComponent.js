import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { MOVIES } from '../shared/films';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieDetail from './MovieDetailComponent';
import AllMovies from './AllMoviesComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        movies: MOVIES,
        selectedMovieId: null
    };
  }

  addFavourite() {
    console.log("here");
  }

  onMovieSelect(movieId) {
    this.setState({ selectedMovieId: movieId});
  }

  render() {

    return (
      <div>
        <Header />
        <div className="backColor">
        <Switch>
              <Route exact path='/home' component={() => <Home movies={this.state.movies.filter((movie) => movie.like === true).slice(0, 3)} onClick={(movieId) => this.onMovieSelect(movieId)}/>} />
              <Route path='/allmovies/:selectedMovieId' component={()=> <MovieDetail movie={this.state.movies.filter((movie) => movie.id === parseInt(this.state.selectedMovieId,10))[0]} />} />
              <Route exact path='/allmovies' component={()=> <AllMovies movies={this.state.movies} onClick={(movieId) => this.onMovieSelect(movieId)}/>} />
              <Redirect exact to="/home" />
        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;