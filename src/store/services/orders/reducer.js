import { PRODUCTS_FILTER } from './actions';

const initialState ={
    orders: [],
    filter: '',
};

function poductsReducer(state = initialState, { type }) {
    switch (type) {
        case PRODUCTS_FILTER:
            return { ...state, filter: payload };
        default:
            return state;    
    }

};

export default poductsReducer;