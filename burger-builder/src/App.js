import React, {Component} from 'react';
import Layout from "./components/statefull/hoc/Layout/Layout";
import BurgerBuilder from "./components/statefull/containers/BurgerBuilder/BurgerBuilder";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Logout from "./components/statefull/containers/Auth/Logout/Logout";
import {connect} from "react-redux";
import * as actionTypes from './store/action';
import asyncComponent from "./components/stateless/hoc/asyncComponent/asyncComponent";


const asyncCheckout = asyncComponent(() => {
  return import('./components/statefull/containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./components/statefull/containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./components/statefull/containers/Auth/Auth');
});

class App extends Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth}/>
        <Route exact path="/" component={BurgerBuilder}/>
        <Redirect to="/"/>
      </Switch>
    );
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout}/>
          <Route path="/orders" component={asyncOrders}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" component={asyncAuth}/>
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
