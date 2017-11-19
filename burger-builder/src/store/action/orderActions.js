import * as actionTypes from './actionTypes'
import baseClient from "../../client-base";

export const purchaseBurgerInit = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_INIT,
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
};

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
};


export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        baseClient.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, response.data))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed(error))
            });
    }
};

