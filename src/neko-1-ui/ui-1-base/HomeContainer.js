import React from 'react';
import Home from "./Home";
import {useSelector} from "react-redux";
import {selectTestState} from "../../neko-2-bll/bll-1-base/selectors";
import {useTestCallbacks} from "../../neko-2-bll/bll-2-logic/useTestCallbacks";

const HomeContainer = ({data = 'no data'}) => {
    const testState = useSelector(selectTestState);
    const testCallbacks = useTestCallbacks();

    return (
        <Home data={data} testState={testState} testCallbacks={testCallbacks}/>
    );
};

export default HomeContainer;
