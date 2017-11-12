import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckoutSummary from "../../../stateless/dummy/Order/CheckoutSummary/CheckoutSummary";


class Checkout extends Component {
    state = {
        ingredients: {
            meat: 1,
            cheese: 1,
            bacon: 1,
            salad: 1
        }
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
