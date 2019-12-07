import React from 'react';
import {NavLink} from "react-router-dom";

const DevHeader = ({devCallbacks}) => {
    if (false) {
        console.log('DevCallbacks: ', devCallbacks);
    }

    return (
        <div style={{margin: '10px', display: 'flex', justifyContent: 'space-around'}}>
            <div style={{margin: '5px'}}><NavLink to='/'>Home</NavLink></div>
            <div style={{margin: '5px'}}><NavLink to='/time-tracker'>Time Tracker</NavLink></div>



            <div style={{margin: '5px'}}><NavLink to='/dev-home'>Dev Home</NavLink></div>
            <div style={{margin: '5px'}}><NavLink to='/dev/test-params'>Dev Home with params</NavLink></div>
            <div style={{margin: '5px'}}><NavLink to='/test-error'>Error page</NavLink></div>
            <div style={{margin: '5px'}}>
                <button onClick={devCallbacks.devGet}>DevGet</button>
            </div>
            <div style={{margin: '5px'}}>
                <button onClick={devCallbacks.devPost}>devPost</button>
            </div>
            <div style={{margin: '5px'}}>
                <button onClick={devCallbacks.devPut}>devPut</button>
            </div>
            <div style={{margin: '5px'}}>
                <button onClick={devCallbacks.devDelete}>devDelete</button>
            </div>
        </div>
    );
};

export default DevHeader;
