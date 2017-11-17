import React, {Component} from 'react';
import CheckoutSummary from "../../../stateless/dummy/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import {connect} from 'react-redux';


class Checkout extends Component {
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
                    ingredients={this.props.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

Checkout.propTypes = {};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);
