import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";
import TimeButton from "./TimeButton";

const TimeButtonContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const timeCallbacks = useTimeCallbacks();

    return (
        <TimeButton
            data={data}
            timeState={timeState}
            timeCallbacks={timeCallbacks}
        />
    );
};

export default TimeButtonContainer;
