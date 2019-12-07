import React from 'react';
import {useSelector} from "react-redux";
import {selectTimeState} from "../../../new-2-bll/new-base/timeSelectors";
import {useTimeCallbacks} from "../../../new-2-bll/new-logic/useTimeCallbacks";
import Task from "./Task";

const TasksMapContainer = ({data = 'no data'}) => {
    const timeState = useSelector(selectTimeState);
    const {setComment, selectTask, setTaskTime, deleteTask} = useTimeCallbacks();

    return timeState.tasks.map(t => (
        <Task
            tags={timeState.tags}
            tagsG={timeState.tagsG}
            key={t.id}
            data={data}
            t={t}
            selectTask={() => selectTask(t.id)}
            deleteTask={() => deleteTask(t.id)}
            checked={timeState.selectedTaskIdsX.find(s => s === t.id) || false}
            setComment={comment => setComment(t.id, comment)}
            setTaskTime={(time, info) => setTaskTime(t.id, time, info)}
        />
    ));
};

export default TasksMapContainer;
