import {setMethod, setToServerData} from "../bll-2-logic/actionCreators";
import {METHOD_POST} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";
import {useCallback} from "react"

export const useDevPost = (dispatch) => {

    return useCallback(() => {
        dispatch(setToServerData(
`{
    "test": "Neko"
}`
        ));
        dispatch(setMethod(METHOD_POST));
        dispatch(sendDataThunk())
    }, [dispatch])
};
