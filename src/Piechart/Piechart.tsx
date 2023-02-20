import React, { useState, useEffect } from 'react';
import './Piechart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, selectTimerProgress, setTimerProgress, reset } from '../store/counter';
import { chartConfig } from '../App';

const createPath = (percentage: number = 0) => {
  return `${percentage}, 100`;
}

const initialMinutes = '00 : 00';

type PiechartProps = {
  minutes?: number;
}

export const Piechart = ({ minutes } : PiechartProps) => {
  const count = useSelector(selectCount);
  const isInProgress = useSelector(selectTimerProgress);
  const [ minutesString, setMinutesString ] = useState(initialMinutes);
  const dispatch = useDispatch();

  useEffect(() => {
    let start = Date.now(),
      duration = chartConfig.minute * chartConfig.totalMinutes,
      diff,
      minutes,
      seconds;

    if (!isInProgress) {
      return;
    }

    const roshTimer = setInterval(() => {
      diff = duration - (((Date.now() - start) / 1000) | 0);

      minutes = (diff / chartConfig.minute) | 0;
      seconds = (diff % chartConfig.minute) | 0;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      if (diff <= 0) {
        // start = Date.now() + 1000;
        clearInterval(roshTimer);
        dispatch(setTimerProgress(false));
        dispatch(reset());
      }

      setMinutesString(`${minutes} : ${seconds}`);
    }, 1000);

    if (!isInProgress) {
      clearInterval(roshTimer);
    }

    return () => {
      clearInterval(roshTimer);
      dispatch(reset());
      return setMinutesString(initialMinutes);
    };
  },[isInProgress]);

  return (
    <div className='Piechart'>
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className="circle"
                strokeDasharray={createPath(count)}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            {minutesString}
          </text>
        </svg>
      </div>
    </div>
  );
};
