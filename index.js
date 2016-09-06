const createStore = require('redux/lib').createStore;
const combineReducers = require('redux/lib').combineReducers;

const math = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ADD':
            return state  + action.value;
        case 'DELETE':
            return state - action.value;
        default:
            return state
    }
};

const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return state = Object.assign({}, state, {name: action.value});
        default:
            return state;
    }
};

const reducer = combineReducers({
    math_result: math,
    user: user
});

let store = createStore(reducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
    console.log('State is:', store.getState())
);

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

const addNumber = (number) => { return {type: 'ADD', value: number} };
const deleteNumber = (number) => { return {type: 'DELETE', value: number} };

const setName = (name) => { return { type: 'SET_NAME', value: name }; };

store.dispatch(addNumber(1000));
store.dispatch(deleteNumber(345));

store.dispatch(setName('Alex'));
store.dispatch(setName('Baumgertner'));