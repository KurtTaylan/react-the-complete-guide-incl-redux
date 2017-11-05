import React from 'react'
import styledClasses from './Person.css'

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('Something went wrong');
    }

    return (
        <div className={styledClasses.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;