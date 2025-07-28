import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsReducer from './services/products/reducer';

const Reducer = combineReducers({
 productsReducer,
});

const store = configureStore({ reducer: Reducer });

export default store;