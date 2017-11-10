import React from 'react';
import styleClasses from './SideDrawer.css';
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const sideDrawer = (props) => {
    return (
        <div className={styleClasses.SideDrawer}>
            <div className={styleClasses.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;
