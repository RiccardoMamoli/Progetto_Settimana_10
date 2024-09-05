import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favoritesRedux from '../reducers/favorites';
import fetchRedux from '../reducers/fetch';


const mainReducers = combineReducers({
    list: favoritesRedux,
    array: fetchRedux
})


const store = configureStore({
    reducer: mainReducers,
})

export default store;