import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Order from "../../../stateless/dummy/Order/Order";
import baseClient from '../../../../client-base'
import withErrorHandler from "../../../stateless/hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        baseClient.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        id: key,
                        ...response.data[key],
                    });
                }

                this.setState({
                    orders: fetchedOrders,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    }


    render() {
        return (
            <div>
                <Order/>
            </div>
        );
    }
}

Orders.propTypes = {};

export default withErrorHandler(Orders, baseClient);
