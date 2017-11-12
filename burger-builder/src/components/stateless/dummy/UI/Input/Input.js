import React from 'react';
import styledClasses from './Input.css';

const input = (props) => {
    let inputElement;

    switch (props.elementType) {
        case ('textArea'):
            inputElement = <textarea {...props.elementConfig}
                                     className={styledClasses.InputElement}
                                     value={props.value}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig}
                                  className={styledClasses.InputElement}
                                  value={props.value}/>;
    }

    return (
        <div className={styledClasses.Input}>
            <label className={styledClasses.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
