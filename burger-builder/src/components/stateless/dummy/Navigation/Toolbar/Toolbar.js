import React from 'react';
import styledClasses from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <header className={styledClasses.Toolbar}>
            <DrawerToggle toggled={props.toggled}/>
            <div className={styledClasses.Logo}>
                <Logo/>
            </div>
            <nav className={styledClasses.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </header>
    );
};

export default toolbar;
