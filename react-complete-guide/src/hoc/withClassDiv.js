import React from 'react';

const withClassDiv = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClassDiv;