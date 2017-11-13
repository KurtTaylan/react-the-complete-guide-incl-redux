import React from 'react';
import styleClasses from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[styleClasses.Button, styleClasses[props.buttonType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;
