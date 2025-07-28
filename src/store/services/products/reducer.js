import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  products: [],  
};

export const productsReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
  },
});

export default productsReducer.reducer;
