import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsReducer from './services/products/reducer';
import ordersReducer from './services/orders/reducer';

const Reducer = combineReducers({
 productsReducer,
 ordersReducer,
});

const store = configureStore({ reducer: Reducer });

export default store;