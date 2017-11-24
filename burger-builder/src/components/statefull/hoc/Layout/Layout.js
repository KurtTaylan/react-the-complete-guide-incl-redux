import React, {Component} from 'react';
import styleClasses from './Layout.css';
import Aux from "../../../stateless/hoc/Aux/Aux";
import Toolbar from "../../../stateless/dummy/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../stateless/dummy/SideDrawer/SideDrawer";
import {connect} from "react-redux";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    toggled={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    opened={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={styleClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);
