import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return initial state if no action is received', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirectPath: '/'
            })
    });
    it('should store the token upon login', () => {
        expect(reducer(undefined, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-userid'
        })).toEqual({
            token: 'some-token',
            userId: 'some-userid',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
})