import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import poductsReducer from './services/orders/reducer';

const Reducer = combineReducers({
 poductsReducer,
});

const store = configureStore({ reducer: Reducer });

export default store;