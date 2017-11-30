import * as actionTypes from './action'

const initialState = {
  persons: []
}

const personReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...oldState,
        persons: oldState.persons.concat(action.newPerson)
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...oldState,
        persons: oldState.persons.filter(person => person.id !== action.id)
      };
    default:
      return oldState;
  }
};

export default personReducer;