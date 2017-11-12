import React from 'react';
import styledClasses from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={styledClasses.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/my-orders">My Orders</NavigationItem>
    </ul>
);

export default navigationItems;
