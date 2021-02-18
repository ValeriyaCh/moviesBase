import { MOVIES } from '../shared/films';
import * as ActionTypes from './ActionTypes';

export const Movies = (state = MOVIES, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LIKE:
            var selected = action.payload;
            return state.map((movie)=> movie.id === parseInt(selected.movieId,10) ? {...movie, like : !selected.like} : movie);
        default:
          return state;
      }
};