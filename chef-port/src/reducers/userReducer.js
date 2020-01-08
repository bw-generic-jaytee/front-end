import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FETCH_ALL_START,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAILURE,
    FETCH_INDIVIDUAL_RECIPE_START,
    FETCH_INDIVIDUAL_RECIPE_SUCCESS,
    FETCH_INDIVIDUAL_RECIPE_FAILURE,
    FETCH_CHEF_RECIPES_START,
    FETCH_CHEF_RECIPES_SUCCESS,
    FETCH_CHEF_RECIPES_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE

} from "../actions";

const initState = {
    error: null,
    isFetching: false,
    recipe: {},
    chef_recipes: null, 
    currentUser: {}
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
        case FETCH_INDIVIDUAL_RECIPE_START: 
            return {
                ...state,
                isFetching: false, 
                error: payload
            }
        case FETCH_INDIVIDUAL_RECIPE_SUCCESS: 
            return {
                ...state,
                recipe: payload,
                isFetching: false,
                error: ''
            }
        case FETCH_INDIVIDUAL_RECIPE_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        case FETCH_CHEF_RECIPES_START: 
            return {
                ...state, 
                isFetching: true,
                error: null
            }
        case FETCH_CHEF_RECIPES_SUCCESS: 
            return {
                ...state, 
                isFetching: false,
                chef_recipes: payload,
                error: ''
            }
        case FETCH_CHEF_RECIPES_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        case DELETE_RECIPE_START: 
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                chef_recipes: payload,
                error: ''
            }
        case DELETE_RECIPE_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        // case GET_ONE_START: 
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: ''
        //     }
        // case GET_ONE_SUCCESS: 
        //     return {
        //         ...state,
        //         isFetching: false,
        //         recipe: payload,
        //         error: ''
        //     }
        // case GET_ONE_FAILURE: 
        //     return{
        //         ...state,
        //         isFetching: false,
        //         error: payload
        //     }
        default: 
            return state;
    }
}