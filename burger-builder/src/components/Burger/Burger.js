import React from 'react';
import styleClasses from './Burger.css';
import BurgerIngredient from "./BurgerIngradient/BurgerIngredient";

const burger = (props) => {
    return (
        <div className={styleClasses.Burger}>
            <BurgerIngredient ingredientType="bread-top"/>
            <BurgerIngredient ingredientType="cheese"/>
            <BurgerIngredient ingredientType="meat"/>
            <BurgerIngredient ingredientType="bread-bottom"/>
        </div>
    );

};

export default burger;