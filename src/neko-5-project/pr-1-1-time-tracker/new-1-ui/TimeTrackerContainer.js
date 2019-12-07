import React from 'react';
import TimeTracker from "./TimeTracker";

const TimeTrackerContainer = ({data = 'no data'}) => {
    // const newState = useSelector(selectNewState);
    // const newCallbacks = useTimeCallbacks();

    return (
        <TimeTracker
            // data={data}
            // newState={newState}
            // newCallbacks={newCallbacks}
        />
    );
};

export default TimeTrackerContainer;
