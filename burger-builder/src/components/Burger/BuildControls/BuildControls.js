import React from 'react';
import styleClasses from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={styleClasses.BuildControls}>
        {controls.map(cntrl => (
            <BuildControl key={cntrl.label} ingredientLabel={cntrl.label}/>
        ))}
    </div>
);

export default buildControls;