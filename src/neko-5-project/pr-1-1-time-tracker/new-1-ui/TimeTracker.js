import React from 'react';
import TimeContainer from "./features/f1-time-component/TimeContainer";
import TimeButtonContainer from "./features/f2-time-button/TimeButtonContainer";
import TasksMapContainer from "./features/f3-tasks-map/TasksMapContainer";
import TagMapContainer from "./features/f4-tag-map/TagMapContainer";
import AddTagContainer from "./features/f5-add-tag/AddTagContainer";
import TagGMapContainer from "./features/f6-tag-g-map/TagGMapContainer";
import AddTagGContainer from "./features/f6-tag-g-map/AddTagGContainer";
import {useTimeCallbacks} from "../new-2-bll/new-logic/useTimeCallbacks";

const TimeTracker = ({data = 'no data', newState, newCallbacks}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewState: ', newState);
        console.log('NewCallbacks: ', newCallbacks);
    }

    const {sendNewDataThunk} = useTimeCallbacks();

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                // alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    // flexGrow: 1,
                    alignItems: 'center',
                    // justifyContent: 'space-around'
                }}
            >
                <button onClick={sendNewDataThunk} style={{margin: '5px'}}>SAVE DATA</button>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        // flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TimeButtonContainer/>
                    <TimeContainer/>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column',
                        // flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}
                >
                    <TasksMapContainer/>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    // flexGrow: 1,
                    alignItems: 'center',
                    // justifyContent: 'space-around'
                }}
            >
                <AddTagContainer/>
                <TagMapContainer/>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'column',
                    // flexGrow: 1,
                    alignItems: 'center',
                    // justifyContent: 'space-around'
                }}
            >
                <AddTagGContainer/>
                <TagGMapContainer/>
            </div>
        </div>
    );
};

export default TimeTracker;
