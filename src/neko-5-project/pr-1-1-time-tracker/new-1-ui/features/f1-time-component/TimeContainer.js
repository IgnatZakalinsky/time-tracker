import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import TimeComponent from "./TimeComponent";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";
import {TIME_PLAY, TIME_STOP} from "../../../new-2-bll/new-base/timeInitialState";

const TimeContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const timeCallbacks = useTimeCallbacks();

    const [timer, setTimer] = useState();
    // useEffect(() => {
    //     timeCallbacks.setTimerState(TIME_STOP);
    // }, []);
    useEffect(() => {
        // if (timeState.timerState === TIME_PLAY) {
            setTimer(setInterval(() => {
                timeCallbacks.setTime(new Date())
            }, 1000))
        // } else {
        //     clearInterval(timer)
        // }
    }, []);
    // }, [timeState.timerState]);

    return (
        <TimeComponent
            data={data}
            timeState={timeState}
            // newCallbacks={newCallbacks}
        />
    );
};

export default TimeContainer;
