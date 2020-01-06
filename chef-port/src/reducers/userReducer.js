import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE

} from "../actions";

const initState = {
    error: null,
    isFetching: false,
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

        default: 
            return state;
    }
}