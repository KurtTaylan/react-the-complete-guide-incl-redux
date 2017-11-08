import React from 'react';
import Aux from '../../hoc/Aux';
import styleClasses from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar,SideDrawer, Backdrop</div>
        <main className={styleClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;