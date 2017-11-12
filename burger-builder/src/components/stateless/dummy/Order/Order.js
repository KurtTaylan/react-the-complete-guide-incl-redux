import React from 'react';
import styledClasses from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map((ingredient) => {
        return (
            <span
                key={ingredient.name}>
                {ingredient.name}: {ingredient.amount}
            </span>
        );
    });
    return (
        <div className={styledClasses.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price:<strong> USD {props.totalPrice.toFixed(2)} </strong></p>
        </div>
    );
};

export default order;
