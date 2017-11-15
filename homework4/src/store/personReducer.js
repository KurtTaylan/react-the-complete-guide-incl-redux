import * as actionTypes from './action'

const initialState = {
    persons: []
}

const personReducer = (oldState = initialState, action) => {
    console.log("Choosing: ", action.type);
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...oldState,
                persons: oldState.persons.concat(action.newPerson)
            }
        case actionTypes.DELETE_PERSON:
            console.log("Deleted Person Object: ", action.id);
            return {
                ...oldState,
                persons: oldState.persons.filter(person => person.id !== action.id)
            }
        default:
            return oldState;
    }
};

export default personReducer;