import {setMethod, setToServerData} from "../bll-2-logic/actionCreators";
import {METHOD_GET} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";
import {useCallback} from "react"

export const useDevGet = (dispatch) => {

    return useCallback(() => {
        dispatch(setToServerData(
`{

}`
        ));
        dispatch(setMethod(METHOD_GET));
        dispatch(sendDataThunk())
    }, [dispatch])
};
