import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";

const AddTagContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const {addTag} = useTimeCallbacks();

    return <button onClick={addTag}>add tag</button>
};

export default AddTagContainer;
