import * as actionTypes from '../action/burgerBuilderActions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilderReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...oldState,
                ingredients: {
                    ...oldState.ingredients,
                    [action.ingredientName]: oldState.ingredients[action.ingredientName] + 1
                },
                totalPrice: oldState.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...oldState,
                ingredients: {
                    ...oldState.ingredients,
                    [action.ingredientName]: oldState.ingredients[action.ingredientName] - 1
                },
                totalPrice: oldState.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return oldState
    }
};

export default burgerBuilderReducer;