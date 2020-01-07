import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FETCH_ALL_START,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAILURE

} from "../actions";

const initState = {
    error: null,
    isFetching: false,
    currentUser: {},
    recipes: []
}

export const reducer = (state = initState, {type , payload}) => {
    switch (type) {
        case SIGNUP_START:
            return {
                ...state,
                error: null,
                isFetching: true,
                currentUser: ''
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                error: null,
                isFetching: false,
                currentUser: payload
            }
        case SIGNUP_FAILURE: 
            return {
                ...state,
                error: payload,
                isFetching: true,
                currentUser: ''
            }
        case LOGIN_START: 
            return {
                ...state,
                isFetching: true,
                error: null,
                currentUser: ''
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                error: null,
                isFetching: false,
                currentUser: payload
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                error: "Wrong Username or Password", 
                isFetching: false,
                currentUser: ''
            }
        case FETCH_ALL_START: 
            return {
                ...state, 
                isFetching: true,
                error: null,
            }
        case FETCH_ALL_SUCCESS: 
            return {
                ...state, 
                recipes: payload,
                isFetching: false,
                error: ''
            }
        case FETCH_ALL_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        default: 
            return state;
    }
}