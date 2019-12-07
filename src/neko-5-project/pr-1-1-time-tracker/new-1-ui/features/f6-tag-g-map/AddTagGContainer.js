import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";

const AddTagGContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const {addTagG} = useTimeCallbacks();

    return <button onClick={addTagG}>add tag G</button>
};

export default AddTagGContainer;
