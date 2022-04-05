import {ActionTypes} from "../constants/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ActionTypes.LIKE_PRODUCTS:
            return {...state, products: state.products.map(p => p.id === action.payload ?
                    {...p, favorite: p.favorite ? false : true } : p)};
        case ActionTypes.REMOVE_PRODUCTS:
            return {...state, products: state.products.filter(p => p.id !== action.payload)}
        default:
            return state;
    }
}
