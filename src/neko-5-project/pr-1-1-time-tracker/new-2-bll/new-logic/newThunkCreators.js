import {NewAPI} from "../../new-3-dal/newApi";

export const sendNewDataThunk = () => async (dispatch, getState) => {
    const data = getState().time;
    // dispatch(setTime());
    try {
        const response = await NewAPI.putTimeTracker(data);

        console.warn('!!! Neko response !!! nextResponse: ', response);
        // dispatch(setTime()); // set something
    } catch (e) {
        // dispatch(setTime());
        console.error('!!! Neko error !!! put time-tracker: ', e)
    }
};
