import * as ActionTypes from './ActionTypes';
import {MOVIES} from '../shared/films';
import { baseUrl } from '../shared/baseUrl';

export const changeLike = (movieId, like) => ({
    type: ActionTypes.CHANGE_LIKE,
    payload: {
        movieId: movieId,
        like: like
    }
});

export const fetchMovies = () => (dispatch) => {

    dispatch(moviesLoading(true));

    return fetch(baseUrl + 'movies')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(error => dispatch(moviesFailed(error.message)));
}

export const moviesLoading = () => ({
    type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = (errmess) => ({
    type: ActionTypes.MOVIES_FAILED,
    payload: errmess
});

export const addMovies = (movies) => ({
    type: ActionTypes.ADD_MOVIES,
    payload: movies
});
