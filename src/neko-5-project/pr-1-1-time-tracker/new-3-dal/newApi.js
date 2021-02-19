import {TestAPI} from "../../../neko-3-dal/testApi";
import {METHOD_GET, METHOD_PUT} from "../../../neko-2-bll/bll-1-base/initialState";

export const NewAPI = {
    putTimeTracker(data) {
        // some url
        let url = 'http://localhost:3005/time-tracker/1';

        return TestAPI.sendData(url, data, METHOD_PUT)
    }

};
