import React, {Component} from 'react';
import CheckoutSummary from "../../../stateless/dummy/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";


class Checkout extends Component {
    state = {
        ingredients: {
            meat: null,
            cheese: null,
            bacon: null,
            salad: null
        },
        totalPrice: null
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice;
        for (let param of query.entries()) {
            if (param[0] === 'totalPrice') {
                totalPrice = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: totalPrice})
    }

    checkoutPayoutHandler = () => {
        this.props.history.replace(this.props.match.url + '/contact-data');
    };

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    buy={this.checkoutPayoutHandler}
                    cancel={this.checkoutCancelHandler}
                    ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (
                    <ContactData
                        totalPrice={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        {...props}
                    />
                )}/>
            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;
