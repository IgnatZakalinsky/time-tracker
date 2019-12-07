import {setTime} from "./newActionCreators";
import {NewAPI} from "../../new-3-dal/newApi";

export const sendNewDataThunk = () => async (dispatch, getState) => {
    const data = getState().newState.data;
    dispatch(setTime('sending...'));
    try {
        const response = await NewAPI.getSome(data);

        console.warn('!!! Neko response !!! nextResponse: ', response);
        dispatch(setTime(response.status)); // set something
    } catch (e) {
        dispatch(setTime('error!'));
        console.error('!!! Neko error !!! nextError: ', e)
    }
};
