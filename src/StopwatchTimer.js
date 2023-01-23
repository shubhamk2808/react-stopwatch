import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Format, TimerWrap } from './Timer';

const StopwatchTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setTime(0);
  };

  const padTime = time => {
    return time.toString().padStart(2, '0');
  };

  const hours = padTime(Math.floor(time / 360000));
  const minutes = padTime(Math.floor((time % 360000) / 6000));
  const seconds = padTime(Math.floor((time % 6000) / 100));
  const milliseconds = padTime(time % 100);

  return (
    <TimerWrap>
      <Typography variant='h4'>Stopwatch</Typography>
      <div>
        <Format>
          <Digits>{hours}:</Digits>
          <Digits>{minutes}:</Digits>
          <Digits>{seconds}:</Digits>
          <span className='digits mili-sec'>{milliseconds}</span>
        </Format>
        <ControlBtn>
          <span className='btn btn-one' onClick={handleStartStopClick}>Start/Stop</span>
          <span className='btn' style={{ color: 'black' }} onClick={handleResetClick}>Reset</span>
        </ControlBtn>
      </div>
    </TimerWrap>
  );
}

export default StopwatchTimer;

export const ControlBtn = styled('div')({
  margin: '3rem 0',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Digits = styled('span')({
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  fontSize: '3rem',
})
