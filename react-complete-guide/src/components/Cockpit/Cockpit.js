import React from 'react';
import styleClasses from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = '';
    if (props.persons.length <= 2) {
        assignedClasses.push(styleClasses.red); // classes will be red
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(styleClasses.bold); // classes will be red
    }

    if (props.showPersons) {
        buttonClass = styleClasses.Red;
    }

    return (
        <div className="Cockpit">
            <h1>Hi, React Application</h1>
            <p className={assignedClasses.join(' ')}> To enable person list please toggle the button</p>
            <button className={buttonClass}
                    onClick={props.toggleHandler}>Toggle Person
            </button>
        </div>
    );
}

export default cockpit;
