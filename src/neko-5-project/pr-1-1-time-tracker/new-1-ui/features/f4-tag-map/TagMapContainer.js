import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";
import Tag from "./Tag";

const TagMapContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const {setTag, addTagToTask, deleteTag} = useTimeCallbacks();

    return timeState.tags.map(t => (
        <Tag
            key={t.id}
            data={data}
            t={t}
            setTag={name => setTag(t.id, name)}
            addTagToTask={() => addTagToTask(t.id)}
            deleteTag={() => deleteTag(t.id)}
        />
    ));
};

export default TagMapContainer;
