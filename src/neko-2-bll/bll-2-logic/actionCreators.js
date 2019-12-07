import {SEND_DATA, SET_FROM_SERVER_DATA, SET_LOGIC_STATE, SET_METHOD, SET_TO_SERVER_DATA, SET_URL} from "./actionTypes";

export const setUrl = url => ({type: SET_URL, url});
export const setToServerData = toServerData => ({type: SET_TO_SERVER_DATA, toServerData});
export const sendData = () => ({type: SEND_DATA});
export const setFromServerData = fromServerData => ({type: SET_FROM_SERVER_DATA, fromServerData});
export const setLogicState = logicState => ({type: SET_LOGIC_STATE, logicState});
export const setMethod = method => ({type: SET_METHOD, method});
