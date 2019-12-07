import {
    ADD_TAG, ADD_TAG_G, ADD_TAG_G_TO_TASK,
    ADD_TAG_TO_TASK,
    ADD_TASK, DELETE_TAG, DELETE_TAG_G, DELETE_TASK,
    SELECT_TASK,
    SET_COMMENT,
    SET_TAG, SET_TAG_G, SET_TASK_TIME,
    SET_TIME,
    SET_TIMER_STATE
} from "./newActionTypes";

export const setTime = time => ({type: SET_TIME, time});
export const setTimerState = timerState => ({type: SET_TIMER_STATE, timerState});

export const addTask = () => ({type: ADD_TASK});
export const setComment = (id, comment) => ({type: SET_COMMENT, id, comment});
export const selectTask = (id) => ({type: SELECT_TASK, id});
export const deleteTask = (id) => ({type: DELETE_TASK, id});
export const setTaskTime = (id, time, info) => ({type: SET_TASK_TIME, id, time, info});

export const setTag = (id, name) => ({type: SET_TAG, id, name});
export const addTag = () => ({type: ADD_TAG});
export const deleteTag = (id) => ({type: DELETE_TAG, id});
export const addTagToTask = (id) => ({type: ADD_TAG_TO_TASK, id});

export const setTagG = (id, name) => ({type: SET_TAG_G, id, name});
export const addTagG = () => ({type: ADD_TAG_G});
export const deleteTagG = (id) => ({type: DELETE_TAG_G, id});
export const addTagGToTask = (id) => ({type: ADD_TAG_G_TO_TASK, id});
