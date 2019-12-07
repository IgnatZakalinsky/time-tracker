import {setMethod, setToServerData, setUrl} from "../bll-2-logic/actionCreators";
import {METHOD_DELETE} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";
import {useSelector} from "react-redux";
import {useCallback} from "react"
import {selectTestState} from "../bll-1-base/selectors";

export const useDevDelete = (dispatch) => {
    const testState = useSelector(selectTestState);
    const fromServerData = testState.fromServerData;
    let lastId = 1;
    if (fromServerData && fromServerData.data && fromServerData.data.length) {
        lastId = fromServerData.data[fromServerData.data.length - 1].id
    }
    const url = testState.url + '/' + lastId;

    return useCallback(() => {
        dispatch(setUrl(url));
        dispatch(setToServerData(
`{

}`
        ));
        dispatch(setMethod(METHOD_DELETE));
        dispatch(sendDataThunk());
        dispatch(setUrl(testState.url))
    }, [dispatch, url, testState.url])
};
