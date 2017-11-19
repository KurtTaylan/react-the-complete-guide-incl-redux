import * as actionTypes from '../action/actionTypes';
import {updateObject} from "../util";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const orderReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_INIT: return updateObject(oldState, {purchased: false});
        case actionTypes.PURCHASE_BURGER_START: return updateObject(oldState, {loading: true});
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(oldState, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return updateObject(oldState, {loading: false});
        case actionTypes.FETCH_ORDERS_START: return updateObject(oldState, {loading: true});
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchBurgerSuccess(oldState, action);
        case actionTypes.FETCH_ORDERS_FAILED: return updateObject(oldState, {loading: false});
        default: return oldState;
    }
};

const purchaseBurgerSuccess = (oldState, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(oldState, {
        loading: false,
        orders: oldState.orders.concat(newOrder),
        purchased: true
    });
};

const fetchBurgerSuccess = (oldState, action) => {
    return updateObject(oldState, {
        orders: action.orders,
        loading: false
    });
};

export default orderReducer;