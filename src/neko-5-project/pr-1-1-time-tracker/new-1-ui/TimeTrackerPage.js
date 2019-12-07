import React from 'react';
import TimeTrackerContainer from "./TimeTrackerContainer";

const TimeTrackerPage = ({data = 'no data'}) => {

    return (
        <>
            <TimeTrackerContainer data={data}/>
        </>
    );
};

export default TimeTrackerPage;
