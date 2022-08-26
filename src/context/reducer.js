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
    }
}