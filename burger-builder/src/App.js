import React, {Component} from 'react';
import Layout from "./components/statefull/hoc/Layout/Layout";
import BurgerBuilder from "./components/statefull/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/statefull/containers/Checkout/Checkout";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Orders from "./components/statefull/containers/Orders/Orders";
import Auth from "./components/statefull/containers/Auth/Auth";
import Logout from "./components/statefull/containers/Auth/Logout/Logout";
import {connect} from "react-redux";
import * as actionTypes from './store/action';


class App extends Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route exact path="/" component={BurgerBuilder}/>
        <Redirect to="/"/>
      </Switch>
    );
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/logout" component={Logout}/>
          <Route exact path="/" component={BurgerBuilder}/>
          <Redirect to="/"/>
        </Switch>
      );
    }
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actionTypes.authCheckState())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
