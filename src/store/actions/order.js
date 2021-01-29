import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailure = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFailure(error));
            });
    };
};

export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    }
}