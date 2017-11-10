import React from 'react';
import Aux from '../../hoc/Aux';
import styleClasses from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={styleClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;