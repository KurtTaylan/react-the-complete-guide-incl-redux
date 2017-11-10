import React from 'react';
import styledClasses from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => {
    return (
        <header className={styledClasses.Toolbar}>
            <div>MENU</div>
            <div className={styledClasses.Logo}>
                <Logo/>
            </div>
            <nav className={styledClasses.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;
