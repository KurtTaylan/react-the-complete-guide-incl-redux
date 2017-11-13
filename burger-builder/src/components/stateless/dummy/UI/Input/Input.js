import React from 'react';
import styledClasses from './Input.css';

const input = (props) => {
    let inputElement;
    let validationError;
    const inputClasses = [styledClasses.InputElement];

    if (props.shouldValidate && props.touched && props.invalid) {
        inputClasses.push(styledClasses.Invalid);
        validationError = <p className={styledClasses.ValidationError}>{props.errorMessage}</p>;
        console.log(props.errorMessage);
        console.log(validationError);
    }

    switch (props.elementType) {
        case ('textArea'):
            inputElement = <textarea {...props.elementConfig}
                                     className={inputClasses.join(' ')}
                                     value={props.value}
                                     onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select {...props.elementConfig}
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}>
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
                                  className={inputClasses.join(' ')}
                                  value={props.value}
                                  onChange={props.changed}/>;
            break;
    }

    return (
        <div className={styledClasses.Input}>
            <label className={styledClasses.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;
