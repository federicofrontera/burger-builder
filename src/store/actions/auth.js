import axios from "axios";
import * as actionTypes from './actionTypes'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFailure = (error) => {
    console.log(error)
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
}

export const auth = (email, password, isSignUp = false) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const url =  isSignUp ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`
            : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
        axios.post(url,authData)
            .then(response => {
                //console.log(response.data.idToken);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                //console.log(err);
                dispatch(authFailure(err.response.data.error));
            })
    }
}