import React from 'react';
import Routes from "./Routes";
import DevHeaderContainer from "../ui-2-dev/DevHeaderContainer";

const Main = () => {
    return (
        <>
            {/*someComponents for all pages*/}
            <DevHeaderContainer show={true}/>

            <Routes/>

            {/*someComponents for all pages*/}
        </>
    );
};

export default Main;
