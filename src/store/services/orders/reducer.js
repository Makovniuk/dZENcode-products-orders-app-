import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  orders: [],  
};

export const ordersReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchOrders.fulfilled, (state, { payload }) => {
        state.orders = payload;
      })
  },
});

export default ordersReducer.reducer;
