import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Order from "../../../stateless/dummy/Order/Order";

class Orders extends Component {
    render() {
        return (
            <div>
                <Order />
            </div>
        );
    }
}

Orders.propTypes = {};

export default Orders;
