import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {reducer} from "./bll-1-base/reducer";
import {newReducer} from "../neko-4-new/new-2-bll/new-base/newReducer";
import {timeReducer} from "../neko-5-project/pr-1-1-time-tracker/new-2-bll/new-base/timeReducer";

const reducers = combineReducers({
    testState: reducer,
    newState: newReducer,
    time: timeReducer,
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

// for dev
window.store = store;

export default store
