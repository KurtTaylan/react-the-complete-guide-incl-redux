import React, {Component} from 'react';
import Layout from "./components/statefull/hoc/Layout/Layout";
import BurgerBuilder from "./components/statefull/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/statefull/containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";
import Orders from "./components/statefull/containers/Orders/Orders";
import Auth from "./components/statefull/containers/Auth/Auth";
import Logout from "./components/statefull/containers/Auth/Logout/Logout";


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/my-orders" component={Orders}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/logout" component={Logout}/>
                        <Route exact path="/" component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
