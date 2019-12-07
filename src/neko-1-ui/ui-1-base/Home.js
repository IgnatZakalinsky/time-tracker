import React from 'react';
import NewComponentContainer from "../../neko-4-new/new-1-ui/NewComponentContainer";
import {
    LOGIC_SEND_MESSAGE,
    LOGIC_SENDING,
    LOGIC_SUCCESS,
    METHOD_DELETE, METHOD_GET, METHOD_POST, METHOD_PUT
} from "../../neko-2-bll/bll-1-base/initialState";

const Home = ({data = 'no data', testState, testCallbacks}) => {
    if (false) {
        console.log('HomePageData: ', data);
        console.log('HomeTestState: ', testState);
        console.log('HomeTestCallbacks: ', testCallbacks);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            {/*test content*/}
            <NewComponentContainer data={data}/>



            {/*test content*/}

            <input value={testState.url} onChange={e => testCallbacks.setUrl(e.currentTarget.value)} style={{width: '500px'}}/>
            <select value={testState.method} onChange={e => testCallbacks.setMethod(e.currentTarget.value)}>
                <option value={METHOD_GET}>GET</option>
                <option value={METHOD_POST}>POST</option>
                <option value={METHOD_PUT}>PUT</option>
                <option value={METHOD_DELETE}>DELETE</option>
            </select>
            <textarea
                style={{width: '500px', height: '200px'}}
                value={testState.toServerData
                } onChange={e => testCallbacks.setToServerData(e.currentTarget.value)}
            />
            <button onClick={testCallbacks.sendDataThunk}>Send data...</button>
            {testState.logicState === LOGIC_SEND_MESSAGE ? 'send message...'
                : testState.logicState === LOGIC_SENDING ? 'sending...'
                : testState.logicState === LOGIC_SUCCESS ? 'SUCCESS: answer in console'
                : 'ERROR: message in console'
            }
        </div>
    );
};

export default Home;
