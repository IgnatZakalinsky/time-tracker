import {TIME_STOP, timeInitialState} from "./timeInitialState";
import {
    ADD_TAG, ADD_TAG_G, ADD_TAG_G_TO_TASK, ADD_TAG_TO_TASK,
    ADD_TASK, DELETE_TAG, DELETE_TAG_G, DELETE_TASK,
    SELECT_TASK,
    SET_COMMENT,
    SET_TAG, SET_TAG_G, SET_TASK_TIME,
    SET_TIME,
    SET_TIMER_STATE
} from "../new-logic/newActionTypes";

export const timeReducer = (state = timeInitialState, action) => {
    switch (action.type) {
        case SET_TIME: {
            return {
                ...state,
                time: action.time,
                startTime: state.timerState === TIME_STOP ? action.time : state.startTime,
            }
        }
        case SET_TIMER_STATE: {
            const time = new Date();
            return {
                ...state,
                timerState: action.timerState,
                startTime: time,
                time,
            }
        }
        case ADD_TASK: {
            const maxId = state.tasks.reduce((acc, t) => acc < t.id ? t.id : acc, 0);
            const lastTagG = state.tasks.length > 0 ? state.tasks[0].tagsG : [];
            return {
                ...state,
                selectedTaskIdsX: [maxId + 1],
                tasks: [
                    {
                        id: maxId + 1,
                        startTime: state.startTime,
                        endTime: state.time,
                        comment: 'new task',
                        tags: [],
                        tagsG: [...lastTagG],
                    },
                    ...state.tasks
                ]
            }
        }
        case ADD_TAG: {
            const maxId = state.tags.reduce((acc, t) => acc < t.id ? t.id : acc, 0);
            return {
                ...state,
                tags: [
                    {
                        id: maxId + 1,
                        name: 'new tag'
                    },
                    ...state.tags
                ]
            }
        }
        case ADD_TAG_G: {
            const maxId = state.tagsG.reduce((acc, t) => acc < t.id ? t.id : acc, 0);
            return {
                ...state,
                tagsG: [
                    {
                        id: maxId + 1,
                        name: 'new tag'
                    },
                    ...state.tagsG
                ]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id),
            }
        }
        case DELETE_TAG: {
            const newTasks = [...state.tasks];
            for (const i of newTasks) {
                i.tags = i.tags.filter(t => t !== action.id);
            }
            return {
                ...state,
                tags: state.tags.filter(t => t.id !== action.id),
                tasks: newTasks,
            }
        }
        case DELETE_TAG_G: {
            const newTasks = [...state.tasks];
            for (const i of newTasks) {
                i.tagsG = i.tagsG.filter(t => t !== action.id);
            }
            return {
                ...state,
                tagsG: state.tagsG.filter(t => t.id !== action.id),
                tasks: newTasks,
            }
        }
        case ADD_TAG_TO_TASK: {
            const newTasks = [...state.tasks];
            for (const i of state.selectedTaskIdsX) {
                const selectedTask = newTasks.find(t => t.id === i) || {fake: true, tags: []};
                const added = !selectedTask.fake && selectedTask.tags.find(t => t === action.id);
                if (!added) selectedTask.tags = [...selectedTask.tags, action.id];
                else selectedTask.tags = selectedTask.tags.filter(t => t !== action.id);
            }
            return {
                ...state,
                tasks: newTasks,
            }
        }
        case ADD_TAG_G_TO_TASK: {
            const newTasks = [...state.tasks];
            for (const i of state.selectedTaskIdsX) {
                const selectedTask = newTasks.find(t => t.id === i) || {fake: true, tagsG: []};
                const added = !selectedTask.fake && selectedTask.tagsG.find(t => t === action.id);
                if (!added) selectedTask.tagsG = [...selectedTask.tagsG, action.id];
                else selectedTask.tagsG = selectedTask.tagsG.filter(t => t !== action.id);
            }
            return {
                ...state,
                tasks: newTasks,
            }
        }
        case SET_COMMENT: {
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? {...t, comment: action.comment} : t)
            }
        }
        case SET_TASK_TIME: {
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ?
                    {
                        ...t,
                        startTime: action.info === 's' ? action.time : t.startTime,
                        endTime: action.info === 'e' ? action.time : t.endTime,
                    }
                    : t)
            }
        }
        case SELECT_TASK: {
            const select = state.selectedTaskIdsX.find(s => s === action.id);
            return {
                ...state,
                selectedTaskIdsX: select ? state.selectedTaskIdsX.filter(s => s !== action.id)
                    : [...state.selectedTaskIdsX, action.id],
            }
        }
        case SET_TAG: {
            return {
                ...state,
                tags: state.tags.map(t => t.id === action.id ? {...t, name: action.name} : t)
            }
        }
        case SET_TAG_G: {
            return {
                ...state,
                tagsG: state.tagsG.map(t => t.id === action.id ? {...t, name: action.name} : t)
            }
        }

        default:
            return state
    }
};
