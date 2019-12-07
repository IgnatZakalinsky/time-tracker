import React from 'react';
import {TIME_PLAY, TIME_STOP} from "../../../new-2-bll/new-base/timeInitialState";

const TimeButton = ({data = 'no data', timeState, timeCallbacks}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewComponentData: ', timeState);
    }
    const {setTimerState, addTask} = timeCallbacks;
    const {timerState} = timeState;

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <button
                onClick={() => {
                    addTask();
                    setTimerState(TIME_STOP);
                }}
                disabled={timerState === TIME_STOP}
            >
                STOP
            </button>
            <button
                onClick={() => setTimerState(TIME_PLAY)}
                disabled={timerState === TIME_PLAY}
            >
                PLAY
            </button>
        </div>
    );
};

export default TimeButton;
