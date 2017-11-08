import React from 'react';
import styleClasses from './Burger.css';
import BurgerIngredient from "./BurgerIngradient/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...new Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} ingredientType={ingredientKey}/>;
            });
        });
    return (
        <div className={styleClasses.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );

};

export default burger;