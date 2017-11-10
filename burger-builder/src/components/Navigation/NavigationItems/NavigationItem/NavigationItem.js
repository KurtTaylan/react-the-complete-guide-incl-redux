import React from 'react';
import styledClasses from './NavigationItem.css';

const navigationItem = (props) => (
    <div className={styledClasses.NavigationItem}>
        <li>
            <a href={props.link}
               className={props.active ? styledClasses.active : null}>
                {props.children}
            </a>
        </li>
    </div>
);

export default navigationItem;
