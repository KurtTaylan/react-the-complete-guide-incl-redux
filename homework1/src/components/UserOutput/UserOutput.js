import React from 'react'

const userOutput = (props) => {
    const style = {
        backgroundColor: 'red',
        width: '50%',
        margin: 'auto',
        marginBottom: '8px',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <p style={style}> Hi, {props.username ? props.username : 'No one'}! Welcome to our Homework project</p>
    );

};

export default userOutput;