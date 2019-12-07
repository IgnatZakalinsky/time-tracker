import * as axios from "axios";
import {METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT} from "../neko-2-bll/bll-1-base/initialState";

export const TestAPI = {
    sendData(url, queryOrData, method) {
        let newUrl = url;

        const queryKeys = Object.keys(queryOrData);
        switch (method) {
            case METHOD_GET: {
                if (queryKeys.length) {
                    newUrl += '?';

                    for (const q of queryKeys) newUrl += q + '=' + queryOrData[q] + '&';
                    newUrl = newUrl.slice(0, -1);
                }

                console.warn('!!! Neko GET !!! url: ', newUrl);
                return axios.get(newUrl);
            }
            case METHOD_POST: {
                console.warn('!!! Neko POST !!! url: ', newUrl, '\ndata: ', queryOrData);
                return axios.post(newUrl, queryOrData);
            }
            case METHOD_PUT: {
                console.warn('!!! Neko PUT !!! url: ', newUrl, '\ndata: ', queryOrData);
                return axios.put(newUrl, queryOrData);
            }
            case METHOD_DELETE: {
                console.warn('!!! Neko DELETE !!! url: ', newUrl, '\ndata: ', queryOrData);
                return axios.delete(newUrl, queryOrData);
            }
            default: {
                console.error('!!! Neko ERROR !!! unsupported method: ', method)
            }
        }

    }

};
