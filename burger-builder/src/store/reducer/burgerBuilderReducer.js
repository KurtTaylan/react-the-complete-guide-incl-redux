import * as actionTypes from '../action/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    loading: false,
    error: false
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
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...oldState,
                ingredients: {
                    ...oldState.ingredients,
                    [action.ingredientName]: oldState.ingredients[action.ingredientName] - 1
                },
                totalPrice: oldState.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENT:
            return {
                ...oldState,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...oldState,
                ingredients: action.ingredients,
                error: true
            };
        default:
            return oldState
    }
};

export default burgerBuilderReducer;