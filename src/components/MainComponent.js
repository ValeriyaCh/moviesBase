import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import MovieDetail from './MovieDetailComponent';
import AllMovies from './AllMoviesComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { changeLike} from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
  
  changeLike: (movieId, like) => dispatch(changeLike(movieId, like))

});

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const MovieWithId = ({match}) => {
      return(
          <MovieDetail movie={this.props.movies.filter((movie) => movie.id === parseInt(match.params.movieId,10))[0]} 
                       changeLike = {this.props.changeLike}
           />
      );
    };

    return (
      <div>
        <Header />
        <div className="backColor">
        <Switch>
              <Route exact path='/home' component={() => <Home movies={this.props.movies.filter((movie) => movie.like === true).slice(0, 3)} />} />
              <Route path='/allmovies/:movieId' component={MovieWithId} />
              <Route exact path='/allmovies' component={()=> <AllMovies movies={this.props.movies}/>} />
              <Route exact path='/contact' component={Contact} />
              <Redirect exact to="/home" />
        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));