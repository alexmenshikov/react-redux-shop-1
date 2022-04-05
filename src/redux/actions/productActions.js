import {ActionTypes} from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const likeProducts = (product) => {
    return {
        type: ActionTypes.LIKE_PRODUCTS,
        payload: product
    }
}

export const removeProducts = (product) => {
    return {
        type: ActionTypes.REMOVE_PRODUCTS,
        payload: product
    }
}
