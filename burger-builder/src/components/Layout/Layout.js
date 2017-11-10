import React, {Component} from 'react';
import styleClasses from './Layout.css';
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: true,
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styleClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

export default Layout;
