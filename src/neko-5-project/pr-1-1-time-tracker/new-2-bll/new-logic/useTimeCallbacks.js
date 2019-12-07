import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {
    addTag, addTagG, addTagGToTask,
    addTagToTask,
    addTask,
    deleteTag, deleteTagG, deleteTask,
    selectTask,
    setComment,
    setTag, setTagG, setTaskTime,
    setTime,
    setTimerState
} from "./newActionCreators";
import {sendNewDataThunk} from "./newThunkCreators";

export const useTimeCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        setTime: time => dispatch(setTime(time)),
        setTimerState: timerState => dispatch(setTimerState(timerState)),

        addTask: () => dispatch(addTask()),
        setComment: (id, comment) => dispatch(setComment(id, comment)),
        selectTask: (id) => dispatch(selectTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        setTaskTime: (id, time, info) => dispatch(setTaskTime(id, time, info)),

        setTag: (id, name) => dispatch(setTag(id, name)),
        addTag: () => dispatch(addTag()),
        deleteTag: (id) => dispatch(deleteTag(id)),
        addTagToTask: (id) => dispatch(addTagToTask(id)),

        setTagG: (id, name) => dispatch(setTagG(id, name)),
        addTagG: () => dispatch(addTagG()),
        deleteTagG: (id) => dispatch(deleteTagG(id)),
        addTagGToTask: (id) => dispatch(addTagGToTask(id)),


        sendNewDataThunk: () => dispatch(sendNewDataThunk())
    }), [dispatch])
};
