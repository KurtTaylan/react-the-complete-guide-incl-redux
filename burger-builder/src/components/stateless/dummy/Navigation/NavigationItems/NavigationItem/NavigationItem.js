import React from 'react';
import styledClasses from './NavigationItem.css';
import {NavLink} from "react-router-dom";

const navigationItem = (props) => (
    <div className={styledClasses.NavigationItem}>
        <li>
            <NavLink
                to={props.link}
                activeClassname={props.active ? styledClasses.active : null}>
                {props.children}
            </NavLink>
        </li>
    </div>
);

export default navigationItem;
