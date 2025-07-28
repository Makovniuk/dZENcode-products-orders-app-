import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "./constants";
import { orders } from "../../../api/orders/orders";


const fetchOrders = createAsyncThunk(`${moduleName}/fetchOrders`, async () => {
    const response = orders.get();
    return response;
});

export default { 
    fetchOrders, 
};