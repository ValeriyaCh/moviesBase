import * as ActionTypes from './ActionTypes';
import {MOVIES} from '../shared/films'

export const changeLike = (movieId, like) => ({
    type: ActionTypes.CHANGE_LIKE,
    payload: {
        movieId: movieId,
        like: like
    }
});

export const fetchMovies = () => (dispatch) => {

    dispatch(moviesLoading(true));

    setTimeout(() => {
        dispatch(addMovies(MOVIES));
    }, 2000);
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
