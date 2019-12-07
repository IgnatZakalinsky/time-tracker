import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {setData} from "./newActionCreators";
import {sendNewDataThunk} from "./newThunkCreators";

export const useNewCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        setData: data => dispatch(setData(data)),
        sendNewDataThunk: () => dispatch(sendNewDataThunk())
    }), [dispatch])
};
