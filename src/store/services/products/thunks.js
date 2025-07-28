import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "./constants";
import { products } from "../../../api/products/products";


const fetchProducts = createAsyncThunk(`${moduleName}/fetchProducts`, async () => {
    const response = products.get();
    return response;
});

export default { 
    fetchProducts, 
};