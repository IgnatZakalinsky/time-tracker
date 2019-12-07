import React from 'react';
import DevHeader from "./DevHeader";
import {useDevCallbacks} from "../../neko-2-bll/bll-3-dev/useDevCallbacks";

const DevHeaderContainer = ({show = false}) => {
    const devCallbacks = useDevCallbacks();

    if (!show) return null;
    return (
        <DevHeader devCallbacks={devCallbacks}/>
    );
};

export default DevHeaderContainer;
