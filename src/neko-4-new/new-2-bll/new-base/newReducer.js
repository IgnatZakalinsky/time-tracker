import {newInitialState} from "./newInitialState";
import {SET_DATA} from "../new-logic/newActionTypes";

export const newReducer = (state = newInitialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }

        default: return state
    }
};
