import React from 'react';
import styleClasses from './Cockpit.css';
import Aux from '../../hoc/PlaceHolder';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = styleClasses.Button;

    if (props.showPersons) {
        buttonClass = [styleClasses.Button, styleClasses.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        buttonClass = [styleClasses.Button, styleClasses.Red].join(' '); // classes will be red

    }

    if (props.persons.length <= 1) {
        buttonClass = [styleClasses.Button, styleClasses.bold].join(' '); // classes will be bold

    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <h2>Hi, React Application</h2>
            <p className={assignedClasses.join(' ')}> To enable person list please toggle the button</p>
            <button className={buttonClass}
                    onClick={props.toggleHandler}>Toggle Person
            </button>
        </Aux>
    );
}

export default cockpit;
