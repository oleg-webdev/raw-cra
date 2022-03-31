import React, { useState } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from './store/counter';

export function App() {
  const [cnt, setCnt] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onincrementByAmount = () => {
    dispatch(incrementByAmount(1));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <span>{count}</span>
        <button aria-label='Increment value' onClick={() => setCnt(cnt + 1)}>
          Local: {cnt}
        </button>
        <button aria-label='Increment value' onClick={onIncrement}>
          Increment
        </button>
        <button aria-label='Increment value' onClick={() => dispatch(onincrementByAmount)}>
          Increment by amount
        </button>
        <button aria-label='Increment value' onClick={() => dispatch(incrementAsync(1))}>
          Increment async
        </button>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </header>
    </div>
  );
}
