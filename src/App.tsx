import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  reset,
  incrementByAmount,
  selectCount,
  selectTimerProgress,
  setTimerProgress,
} from './store/counter';
import { Piechart } from './Piechart/Piechart';
import './App.scss';

export const chartConfig = {
  minute: 60,
  totalMinutes: 11,
};

const totalSeconds = chartConfig.minute * chartConfig.totalMinutes;
const stepPerSecond = 100 / totalSeconds;
const minute = stepPerSecond * chartConfig.minute;
const totalMinutes = minute * chartConfig.totalMinutes;

export function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isInProgress = useSelector(selectTimerProgress);
  const seconds = count / stepPerSecond;
  const minutes = seconds / 60;

  useEffect(() => {
    const roshTimerSeconds = setInterval(() => {
      if(isInProgress) {
        dispatch(incrementByAmount(stepPerSecond));
      }
    }, 1000);

    if (!isInProgress || minutes >= totalMinutes) {
      clearInterval(roshTimerSeconds);
    }

    return () => clearInterval(roshTimerSeconds);
  }, [isInProgress]);

  const onToggle = () => {
    isInProgress ? onReset() : onStart();
  };

  const handleStartReset = useCallback(event => {
    const { keyCode } = event;
    // KEYCODES: http://gcctech.org/csc/javascript/javascript_keycodes.htm
    if (keyCode === 32) {
      onToggle();
    }
  }, [isInProgress]);

  useEffect(() => {
    window.addEventListener('keydown', handleStartReset);
    return () => window.removeEventListener('keydown', handleStartReset);
  }, [handleStartReset]);



  const onStart = () => {
    dispatch(setTimerProgress(!isInProgress));
  };

  const onReset = () => {
    dispatch(setTimerProgress(!isInProgress));
    dispatch(reset());
  };

  const buttonClass = `button-wrapper ${isInProgress ? 'in-progress' : 'stopped'}`;

  return (
    <div className='App'>
      <Piechart minutes={minutes} />

      <div className={buttonClass}>
        <button onClick={onToggle}>{isInProgress ? 'Reset' : 'Start'}</button>
        <p>Hit space to start/reset</p>
      </div>

      <div className='info'>
        <p>Roshan respawns after 8-11 minutes</p>
        <p>Aegis lasts 5 minutes</p>
      </div>
    </div>
  );
}
