import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementAsync } from './store/counter';

type stateType = {
    counter: number;
    user: Object;
};

function App() {
    const [some, setSome] = useState(0);
    const counter = useSelector((state: stateType) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(increment());
    }, [dispatch]);

    const onIncrement = () => {
        dispatch(increment());
    };

    const onIncrementAsync = () => {
        dispatch(incrementAsync());
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <strong>local: {some}</strong>
                </p>
                <p>
                    <strong>store: {counter}</strong>
                </p>
                <button onClick={() => setSome(some + 1)}>set local</button>
                <button onClick={onIncrement}>increment store</button>

                <button onClick={onIncrementAsync}>increment async store</button>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
