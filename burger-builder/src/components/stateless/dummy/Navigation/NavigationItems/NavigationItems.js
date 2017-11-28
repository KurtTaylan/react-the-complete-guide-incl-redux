import React from 'react';
import styledClasses from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={styledClasses.NavigationItems}>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    {props.isAuthenticated ?
      <NavigationItem link="/my-orders">My Orders</NavigationItem>
      : null
    }
    {props.isAuthenticated ?
      <NavigationItem link="/logout">Logout</NavigationItem>
      :
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    }
  </ul>
);

export default navigationItems;
