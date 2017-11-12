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
        case ('select'):
            inputElement = (
                <select {...props.elementConfig}
                        className={styledClasses.InputElement}
                        value={props.value}>
                    {props.elementConfig.options.map(option => {
                        return <option
                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>);
            break;
        default:
            inputElement = <input {...props.elementConfig}
                                  className={styledClasses.InputElement}
                                  value={props.value}/>;
            break;
    }

    return (
        <div className={styledClasses.Input}>
            <label className={styledClasses.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
