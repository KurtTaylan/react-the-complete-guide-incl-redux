import React from 'react';
import styleClasses from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={styleClasses.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
