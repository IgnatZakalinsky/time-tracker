import React, {useState} from 'react';

const Tag = ({data = 'no data', t, setTag, addTagToTask, deleteTag}) => {
    if (false) {
        console.log('NewComponentData: ', data);
        console.log('NewComponentData: ', t);
    }

    const [name, setName] = useState(t.name);

    return (
        <div
            style={{
                margin: '5px',
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <div>
                <button onClick={addTagToTask}>add/remove</button>
            </div>
            <div>
                #
            </div>
            <div>
                <input value={name} onChange={e => setName(e.currentTarget.value)} onBlur={() => setTag(name)}/>
            </div>
            <div>
                <button style={{color: 'red'}} onClick={deleteTag}>X</button>
            </div>
        </div>
    );
};

export default Tag;
