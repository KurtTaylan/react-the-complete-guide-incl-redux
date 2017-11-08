import React from 'react';
import styleClasses from './BuildControl.css';

const buildControl = (props) => (
    <div className={styleClasses.BuildControl}>
        <div className={styleClasses.Label}>{props.ingredientLabel}</div>
        <button className={styleClasses.Less} onClick={props.removed} disabled={props.disabled}>LESS</button>
        <button className={styleClasses.More} onClick={props.added}>MORE</button>
    </div>
);

export default buildControl;
