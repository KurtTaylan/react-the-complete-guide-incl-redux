import React from 'react';
import styledClasses from './NavigationItem.css';
import {NavLink} from "react-router-dom";

const navigationItem = (props) => (
    <div className={styledClasses.NavigationItem}>
        <li>
            <NavLink
                exact={props.exact}
                to={props.link}
                activeclassname={styledClasses.active}>
                {props.children}
            </NavLink>
        </li>
    </div>
);

export default navigationItem;
