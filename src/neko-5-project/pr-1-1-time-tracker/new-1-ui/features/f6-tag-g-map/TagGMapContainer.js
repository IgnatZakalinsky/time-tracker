import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";
import Tag from "../f4-tag-map/Tag";

const TagGMapContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const {setTagG, addTagGToTask, deleteTagG} = useTimeCallbacks();

    return timeState.tagsG.map(t => (
        <Tag
            key={t.id}
            data={data}
            t={t}
            setTag={name => setTagG(t.id, name)}
            addTagToTask={() => addTagGToTask(t.id)}
            deleteTag={() => deleteTagG(t.id)}
        />
    ));
};

export default TagGMapContainer;
