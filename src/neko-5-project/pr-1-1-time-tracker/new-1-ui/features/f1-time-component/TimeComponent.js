import React from 'react';
import moment from "moment";

const TimeComponent = ({data = 'no data', timeState, newCallbacks}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewComponentData: ', timeState);
    }
    const time = {
        H: moment(new Date(timeState.time)).format('H'),
        m: moment(new Date(timeState.time)).format('m'),
        s: moment(new Date(timeState.time)).format('s'),
    };
    const startTime = {
        H: moment(new Date(timeState.startTime)).format('H'),
        m: moment(new Date(timeState.startTime)).format('m'),
        s: moment(new Date(timeState.startTime)).format('s'),
    };
    const timeX = {
        H: moment(new Date(timeState.time - timeState.startTime - 1000 * 60 * 60 * 3)).format('H'),
        m: moment(new Date(timeState.time - timeState.startTime - 1000 * 60 * 60 * 3)).format('m'),
        s: moment(new Date(timeState.time - timeState.startTime - 1000 * 60 * 60 * 3)).format('s'),
    };

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            {startTime.H < 10 && 0}{startTime.H}
            :{startTime.m < 10 && 0}{startTime.m}
            :{startTime.s < 10 && 0}{startTime.s}
            -
            {time.H < 10 && 0}{time.H}
            :{time.m < 10 && 0}{time.m}
            :{time.s < 10 && 0}{time.s}
            -(
            {timeX.H < 10 && 0}{timeX.H}
            :{timeX.m < 10 && 0}{timeX.m}
            :{timeX.s < 10 && 0}{timeX.s}
            )
        </div>
    );
};

export default TimeComponent;
