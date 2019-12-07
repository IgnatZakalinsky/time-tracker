import React, {useState} from 'react';
import moment from "moment";
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

const Task = ({data = 'no data', t, setComment, selectTask, checked, tags, tagsG, setTaskTime, deleteTask}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewComponentData: ', t);
    }

    const [commentT, setCommentT] = useState(t.comment);
    const endTime = {
        H: moment(new Date(t.endTime)).format('H'),
        m: moment(new Date(t.endTime)).format('m'),
        s: moment(new Date(t.endTime)).format('s'),
    };
    const startTime = {
        H: moment(new Date(t.startTime)).format('H'),
        m: moment(new Date(t.startTime)).format('m'),
        s: moment(new Date(t.startTime)).format('s'),
    };
    const time = {
        H: moment(new Date(t.endTime - t.startTime - 1000 * 60 * 60 * 3)).format('H'),
        m: moment(new Date(t.endTime - t.startTime - 1000 * 60 * 60 * 3)).format('m'),
        s: moment(new Date(t.endTime - t.startTime - 1000 * 60 * 60 * 3)).format('s'),
    };
    const st = `${startTime.H < 10 ? 0 : ''}${startTime.H}:${startTime.m < 10 ? 0 : ''}${startTime.m}`;
    const et = `${endTime.H < 10 ? 0 : ''}${endTime.H}:${endTime.m < 10 ? 0 : ''}${endTime.m}`;

    // console.log(t.startTime)

    return (
        <div
            style={{
                margin: '5px',
                padding: '5px',
                border: '1px solid lime',
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            onClick={selectTask}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <button style={{color: 'red'}} onClick={deleteTask}>X</button>
                {t.tagsG.map(t =>
                    <span
                        key={t + Math.random().toString()}
                        style={{
                            margin: '5px',
                            padding: '5px',
                            border: '1px solid purple',
                        }}
                    >
                        #{tagsG.find(ta => ta.id === t) ? tagsG.find(ta => ta.id === t).name : ''}
                    </span>)}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                {t.tags.map(t =>
                    <span
                        key={t + Math.random().toString()}
                        style={{
                            margin: '5px',
                            padding: '5px',
                            border: '1px solid red',
                        }}
                    >
                        #{tags.find(ta => ta.id === t) ? tags.find(ta => ta.id === t).name : ''}
                    </span>)}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    // flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                <div>
                    {/*<input type={'time'} value={st}/>*/}
                    {/*---*/}
                    {/*<input type={'time'} value={et}/>*/}
                    {/*<input type={'datetime-local'} value={t.startTime}/>*/}
                    <TimePicker style={{width: '80px'}} value={moment(t.startTime)} onChange={e => setTaskTime(e._d, 's')}/>
                    -
                    <TimePicker style={{width: '80px'}} value={moment(t.endTime)} onChange={e => setTaskTime(e._d, 'e')}/>
                    {/*<span>*/}
                        {/*{startTime.H < 10 && 0}{startTime.H}*/}
                        {/*:{startTime.m < 10 && 0}{startTime.m}*/}
                        {/*:{startTime.s < 10 && 0}{startTime.s}*/}
                    {/*</span>*/}
                    {/*---*/}
                    {/*<span>*/}
                        {/*{endTime.H < 10 && 0}{endTime.H}*/}
                        {/*:{endTime.m < 10 && 0}{endTime.m}*/}
                        {/*:{endTime.s < 10 && 0}{endTime.s}*/}
                    {/*</span>*/}
                    -(
                    <span>
                        {time.H < 10 && 0}{time.H}
                        :{time.m < 10 && 0}{time.m}
                        :{time.s < 10 && 0}{time.s}
                    </span>
                    )-
                </div>
                <div>
                <textarea
                    style={{width: '400px'}}
                    value={commentT}
                    onChange={e => setCommentT(e.currentTarget.value)}
                    onBlur={() => setComment(commentT)}
                />
                </div>
                <div>
                    <input type={'checkbox'} checked={checked}/>
                </div>
            </div>
        </div>
    );
};

export default Task;
