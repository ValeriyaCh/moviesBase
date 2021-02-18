import * as ActionTypes from './ActionTypes';

export const changeLike = (movieId, like) => ({
    type: ActionTypes.CHANGE_LIKE,
    payload: {
        movieId: movieId,
        like: like
    }
});