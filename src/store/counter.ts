import { Dispatch, Action } from 'redux';

interface IncrementType extends Action {
    payload: number;
};

export const increment = (someval: any) => ({
    type: 'INCREMENT',
    payload: someval,
});

export const decrement = () => ({
    type: 'DECREMENT',
});

export const incrementAsync = (someval: any) => (dispatch: Dispatch) => {
    setTimeout(() => dispatch(increment(someval)), 50);
};

const initialState = 8;

const counter = (state = initialState, action: IncrementType) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

export default counter;
