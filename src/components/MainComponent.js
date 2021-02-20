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
import { fetchMovies } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => ({
  
  changeLike: (movieId, like) => dispatch(changeLike(movieId, like)),
  fetchMovies: () => { dispatch(fetchMovies())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

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
  componentDidMount() {
    this.props.fetchMovies();
    document.title = 'MoviesBase';
  }

  render() {

    const MovieWithId = ({match}) => {
      return(
          <MovieDetail movie={this.props.movies.movies.filter((movie) => movie.id === parseInt(match.params.movieId,10))[0]} 
                       changeLike={this.props.changeLike}
                       isLoading={this.props.movies.isLoading}
                       errMess={this.props.movies.errMess}
           />
      );
    };

    const HomePage = () => {
      return(
        <Home movies={this.props.movies.movies.filter((movie) => movie.like === true).slice(0, 3)} 
        isLoading={this.props.movies.isLoading}
        errMess={this.props.movies.errMess}/>
      );
    };

    const MoviesPage =() => {
      return(
        <AllMovies movies={this.props.movies} 
                  isLoading={this.props.movies.isLoading}
                  errMess={this.props.movies.errMess}/>
      );
    };

    return (
      <div>
        <Header />
        <div className="backColor">
        <Switch>
              <Route exact path='/home' component={HomePage} />
              <Route path='/allmovies/:movieId' component={MovieWithId} />
              <Route exact path='/allmovies' component={MoviesPage} />
              <Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
              <Redirect exact to="/home" />
        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));