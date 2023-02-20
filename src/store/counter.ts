import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    timerInProgress: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setTimerProgress: (state, action) => {
      state.timerInProgress = action.payload;
    }
  },
});

export const { increment, decrement, reset, incrementByAmount, setTimerProgress } = counterSlice.actions;
export const incrementAsync = (amount: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: any) => state.counter.value;
export const selectTimerProgress = (state: any) => state.counter.timerInProgress;

export default counterSlice.reducer;
