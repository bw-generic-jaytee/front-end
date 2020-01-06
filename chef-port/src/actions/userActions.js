import {axiosWithAuth} from '../utils/axiosWithAuth';

//login exports
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//signup exports
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


export const login = (userInfo, history) => dispatch => {
    dispatch({type: LOGIN_START})
    axiosWithAuth()
        .post('/user/login', userInfo)
        .then(res => {
            console.log('res from login action', res)
            localStorage.setItem('token', res.data.token)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            history.push('/dashboard')
        })
        .catch((err) => dispatch({type: LOGIN_FAILURE}))
}

export const signup = (userInfo, history) => dispatch => {
    dispatch({type: SIGNUP_START});
    axiosWithAuth()
        .post('/user/register', userInfo)
        .then(res => {
            console.log('res from signup action', res)
            localStorage.setItem('token', res.data.token)
            dispatch({type: SIGNUP_SUCCESS, payload: res.data})
            history.push('/dashboard')
        })
        .catch((err) => dispatch({type: SIGNUP_FAILURE}))
}