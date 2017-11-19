import * as actionTypes from '../action/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const orderReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_INIT:
            return {
                ...oldState,
                purchased: false
            };
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...oldState,
                loading: true,
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...oldState,
                loading: false,
                orders: oldState.orders.concat(newOrder),
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...oldState,
                loading: false,
            };
        default:
            return {
                ...oldState
            };
    }
};


export default orderReducer;