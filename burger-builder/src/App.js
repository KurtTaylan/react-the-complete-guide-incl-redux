import React, {Component} from 'react';
import Layout from "./components/statefull/hoc/Layout/Layout";
import BurgerBuilder from "./components/statefull/containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/statefull/containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";
import Orders from "./components/statefull/containers/Orders/Orders";


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/my-orders" component={Orders}/>
                        <Route exact path="/" component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
