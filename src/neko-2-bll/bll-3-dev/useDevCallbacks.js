import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {useDevGet} from "./useDevGet";
import {useDevPost} from "./useDevPost";
import {useDevPut} from "./useDevPut";
import {useDevDelete} from "./useDevDelete";

export const useDevCallbacks = () => {
    const dispatch = useDispatch();

    const devGet = useDevGet(dispatch);
    const devPost = useDevPost(dispatch);
    const devPut = useDevPut(dispatch);
    const devDelete = useDevDelete(dispatch);

    return useMemo(() => ({
        devGet,
        devPost,
        devPut,
        devDelete
    }), [devGet, devPost, devPut, devDelete])
};
