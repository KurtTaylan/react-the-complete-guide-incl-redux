import React, {Component} from 'react';
import styleClasses from './Layout.css';
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggled={this.sideDrawerToggleHandler}/>
                <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styleClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

export default Layout;
