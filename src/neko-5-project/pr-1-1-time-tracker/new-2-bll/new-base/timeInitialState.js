export const TIME_STOP = 'TIME/TIME_STOP';
export const TIME_PLAY = 'TIME/TIME_PLAY';

export const timeInitialState = {
    startTime: 0,
    time: 0,
    timerState: TIME_STOP,
    tasks: [{
        id: 1,
        startTime: -1000 * 60 * 60 * 3,
        endTime: -1000 * 60 * 60 * 2,
        comment: 'test task',
        tags: [2],
        tagsG: [1],
    }],
    selectedTaskIdsX: [],
    tags: [
        {id: 1, name: 'jsx'},
        {id: 2, name: 'initialState'},
        {id: 3, name: 'sendToProps'},
        {id: 4, name: 'action'},
        {id: 5, name: 'promise'},
        {id: 6, name: 'saga'},
        {id: 7, name: 'thunk'},
        {id: 8, name: 'request'},
        {id: 9, name: 'logic'},
        {id: 10, name: 'plan'},
        {id: 11, name: 'report'},
        {id: 12, name: 'preparation'},
    ],
    tagsG: [
        {id: 1, name: 'login page'},
        {id: 2, name: 'table page'},
        {id: 3, name: 'chat page'},
    ]
};
