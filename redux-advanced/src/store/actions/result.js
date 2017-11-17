import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (res) => {
    return {
        type: DELETE_RESULT,
        resultElId: res
    }
};