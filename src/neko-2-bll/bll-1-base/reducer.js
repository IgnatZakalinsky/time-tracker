import {initialState, LOGIC_SEND_MESSAGE, LOGIC_SUCCESS} from "./initialState";
import {
    SEND_DATA,
    SET_FROM_SERVER_DATA,
    SET_LOGIC_STATE, SET_METHOD,
    SET_TO_SERVER_DATA,
    SET_URL
} from "../bll-2-logic/actionTypes";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_URL: {
            return {
                ...state,
                url: action.url,
                logicState: LOGIC_SEND_MESSAGE
            }
        }
        case SET_TO_SERVER_DATA: {
            return {
                ...state,
                toServerData: action.toServerData,
                logicState: LOGIC_SEND_MESSAGE
            }
        }
        case SEND_DATA: {
            return {
                ...state,
                // reserve
            }
        }
        case SET_FROM_SERVER_DATA: {
            return {
                ...state,
                fromServerData: action.fromServerData,
                logicState: LOGIC_SUCCESS
            }
        }
        case SET_LOGIC_STATE: {
            return {
                ...state,
                logicState: action.logicState
            }
        }
        case SET_METHOD: {
            return {
                ...state,
                method: action.method
            }
        }

        default:
            return state
    }
};
