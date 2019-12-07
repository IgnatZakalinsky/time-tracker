import {setData} from "./newActionCreators";
import {NewAPI} from "../../new-3-dal/newApi";

export const sendNewDataThunk = () => async (dispatch, getState) => {
    const data = getState().newState.data;
    dispatch(setData('sending...'));
    try {
        const response = await NewAPI.getSome(data);

        console.warn('!!! Neko response !!! nextResponse: ', response);
        dispatch(setData(response.status)); // set something
    } catch (e) {
        dispatch(setData('error!'));
        console.error('!!! Neko error !!! nextError: ', e)
    }
};
