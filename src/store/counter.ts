import { Dispatch, Action } from 'redux';

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});

export const incrementAsync = () => (dispatch: Dispatch) => {
    setTimeout(() => dispatch(increment()), 50);
};

const initialState = 8;

const counter = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

export default counter;
