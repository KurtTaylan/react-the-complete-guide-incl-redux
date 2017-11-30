import React, {Component} from 'react';
import Order from "../../../stateless/dummy/Order/Order";
import * as go from '../../../../client'
import withErrorHandler from "../../../stateless/hoc/withErrorHandler/withErrorHandler";
import * as actions from '../../../../store/action'
import {connect} from "react-redux";
import Spinner from "../../../stateless/dummy/UI/Spinner/Spinner";


class Orders extends Component {
  
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }
  
  render() {
    let orders = <Spinner/>;
    if (!this.props.loading) {
      orders = (
        <div>
          {this.props.orders.map(order => {
            return (<Order
                key={order.id}
                ingredients={order.ingredients}
                totalPrice={+order.totalPrice}/>
            );
          })}
        </div>
      );
    }
    return orders;
  }
}

Orders.propTypes = {};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, go.baseAPI));
