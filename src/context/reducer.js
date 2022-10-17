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
                user: {},
                cart:[]
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

        case "CHANGE": {
            console.log("contextData", action.payload);
            return {
                ...state,
                cart: [...state.cart.map((item, index) => {
                    if (index == action.payload.index) {
                        item.quantity = action.payload.qtychange == 1 ? item.quantity +.5 : item.quantity - .5
                    }
                    return item
                })]
            }
        }
        case 'CLEAR':{
            return{
                ...state,
                cart:[]
            }
        }
        default:
            return {}
    }
}