import React from 'react';
import styleClasses from './Modal.css';

const modal = (props) => (
    <div className={styleClasses.Modal}>
        {props.children}
    </div>
);

export default modal;