import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckoutSummary from "../../../stateless/dummy/Order/CheckoutSummary/CheckoutSummary";


class Checkout extends Component {
    state = {
        ingredients: {
            meat: null,
            cheese: null,
            bacon: null,
            salad: null
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            console.log(param);
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients})
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
            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;
