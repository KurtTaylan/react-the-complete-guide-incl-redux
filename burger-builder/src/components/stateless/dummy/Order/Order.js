import React from 'react';
import styledClasses from './Order.css';

const order = (props) => {
    return (
        <div className={styledClasses.Order}>
            <p> Ingredients: Salad: 1, Meat: 1</p>
            <p>Price<strong> USD 5.5</strong></p>
        </div>
    );
};

export default order;
