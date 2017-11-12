import React from 'react';
import styleClasses from './Burger.css';
import BurgerIngredient from "./BurgerIngradient/BurgerIngredient";
import {withRouter} from "react-router-dom";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...new Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} ingredientType={ingredientKey}/>;
            });
        }).reduce((array, el) => {
            return array.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={styleClasses.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );

};

export default withRouter(burger);