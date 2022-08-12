import React, { useState } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from './store/counter';

export function App() {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const onIncrementByAmount = () => {
    dispatch(incrementByAmount(3));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <span>{count}</span>
        <button onClick={() => setAmount(amount + 1)}>
          Local: {amount}
        </button>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={onIncrementByAmount}>
          Increment by amount
        </button>
        <button onClick={() => dispatch(incrementAsync(1))}>
          Increment async
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </header>
    </div>
  );
}
