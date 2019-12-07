import {useDispatch} from "react-redux";
import {setMethod, setToServerData, setUrl} from "./actionCreators";
import {sendDataThunk} from "./thunkCreators";
import {useMemo} from "react"

export const useTestCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        setUrl: url => dispatch(setUrl(url)),
        setToServerData: toServerData => dispatch(setToServerData(toServerData)),
        sendDataThunk: () => dispatch(sendDataThunk()),
        setMethod: method => dispatch(setMethod(method))
    }), [dispatch])
};
