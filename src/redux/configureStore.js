import {createStore, combineReducers} from 'redux';
import { Movies } from './movies'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            movies: Movies
        })
    );

    return store;
}