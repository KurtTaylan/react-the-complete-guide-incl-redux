import React from 'react';
import styledClasses from './DrawerToggle.css';

const drawerToggle = (props) => {
    return (
        <div className={styledClasses.DrawerToggle}
             onClick={props.toggled}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;
