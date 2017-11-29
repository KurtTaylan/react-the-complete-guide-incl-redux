import * as actionTypes from '../action/actionTypes';
import {updateObject} from "../util";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  loading: false,
  error: false,
  building: false
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
      return addIngredient(oldState, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(oldState, action);
    case actionTypes.SET_INGREDIENT:
      return setIngredient(oldState, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(oldState, {error: true});
    default:
      return oldState
  }
};

const addIngredient = (oldState, action) => {
  const updatedIngredient = {[action.ingredientName]: oldState.ingredients[action.ingredientName] + 1};
  const updatedIngredients = updateObject(oldState.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: oldState.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };
  return updateObject(oldState, updatedState);
};

const removeIngredient = (oldState, action) => {
  const updatedDeleteIngredient = {[action.ingredientName]: oldState.ingredients[action.ingredientName] - 1};
  const updatedDeleteIngredients = updateObject(oldState.ingredients, updatedDeleteIngredient);
  const updatedDeleteState = {
    ingredients: updatedDeleteIngredients,
    totalPrice: oldState.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };
  return updateObject(oldState, updatedDeleteState);
};

const setIngredient = (oldState, action) => {
  return updateObject(oldState, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: true
  });
};

export default burgerBuilderReducer;