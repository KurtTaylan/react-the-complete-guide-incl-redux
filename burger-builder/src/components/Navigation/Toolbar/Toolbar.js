import React from 'react';
import styledClasses from './Toolbar.css';
import Logo from "../../Logo/Logo";

const toolbar = () => {
    return (
        <header className={styledClasses.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                ...
            </nav>

        </header>
    );
};

export default toolbar;
