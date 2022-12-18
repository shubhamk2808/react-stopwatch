import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { ControlBtn, Digits } from './StopwatchTimer';

export default function Timer() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div style={{ color: 'black' }} className="btn btn-two"
                onClick={handleReset}>
                Reset
            </div>
            <div className="btn btn-one"
                onClick={handlePauseResume}>
                {isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <>
            <TimerWrap>
                <Typography variant='h4'>Timer watch</Typography>
                <div>
                    <Format>
                        <Digits>
                            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                        </Digits>
                        <Digits>
                            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                        </Digits>
                        <Digits className="mili-sec">
                            {("0" + ((time / 10) % 100)).slice(-2)}
                        </Digits>
                    </Format>

                    <ControlBtn>
                        <div>{isActive ? ActiveButtons : StartButton}</div>
                    </ControlBtn>
                </div>
            </TimerWrap>
        </>

    );
}

export const TimerWrap = styled('div')({
    margin: '3rem 0',
    width: '100%',
    height: '12%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
})

export const Format = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    alignItems: 'center'
})


