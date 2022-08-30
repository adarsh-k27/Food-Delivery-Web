import {
    LOGINSUCCESS
} from '../action'

export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case LOGINSUCCESS: {
            console.log("im here");
            return {
                ...state,
                authentication: true,
                user: action.payload
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                authentication: false,
                user: {}
            }
        }
        case "GETCATOGERY": {
            return {
                ...state,
                catogery: action.payload
            }
        }
        case "ALLProducts": {
            return {
                ...state,
                products: action.payload
            }
        }
        case "LOAD_CART": {
            return {
                ...state,
                cart: action.payload
            }
        }
        case "ADD_CART": {
            console.log("added to cart");
            return {
                ...state,
                cart: [...action.payload]
            }
        }
        default:
            return {}
    }
}