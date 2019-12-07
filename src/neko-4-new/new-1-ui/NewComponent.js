import React from 'react';

const NewComponent = ({data = 'no data', newState, newCallbacks}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewState: ', newState);
        console.log('NewCallbacks: ', newCallbacks);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <div>New component [</div>
            {/*test content*/}

            GET: `http://localhost:3005/ + ${'{'}{'String(data)'}{'}'}`
            <input value={newState.data} onChange={e => newCallbacks.setData(e.currentTarget.value)}/>
            <button onClick={newCallbacks.sendNewDataThunk}>new</button>

            {/*test content*/}
            <div>]</div>
        </div>
    );
};

export default NewComponent;
