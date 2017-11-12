import React, {Component} from 'react';

import Modal from "../../../stateless/dummy/UI/Modal/Modal";
import Aux from "../../../stateless/hoc/Aux/Aux";
import Burger from "../../../stateless/dummy/Burger/Burger";
import BuildControls from "../../../stateless/dummy/Burger/BuildControls/BuildControls";
import OrderSummary from "../../../stateless/dummy/Burger/OrderSummary/OrderSummary";
import Spinner from "../../../stateless/dummy/UI/Spinner/Spinner";
import withErrorHandler from "../../../stateless/hoc/withErrorHandler/withErrorHandler";
import baseClient from "../../../../client-base";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        notPurchaseable: true,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        baseClient.get('/ingredient.json')
            .then(response => {
                this.setState({
                    ingredients: response.data,
                })
            }).catch(error => this.setState({error: true}));
    }


    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let param in this.state.ingredients) {
            queryParams.push(encodeURIComponent(param) + '=' + encodeURIComponent(this.state.ingredients[param]));
        }
        queryParams.push('totalPrice=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            notPurchaseable: sum <= 0
        });
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        }, this.updatePurchaseState(updatedIngredient));
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        }, this.updatePurchaseState(updatedIngredient));

    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Ingredients can't be loaded.</p> : <Spinner/>;
        let orderSummary = null;
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        notPurchaseable={this.state.notPurchaseable}
                        ordered={this.purchaseHandler}/>
                </Aux>);

            orderSummary = <OrderSummary
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseContinued={this.purchaseContinueHandler}
                purchaseCanceled={this.purchaseCancelHandler}/>;
        }
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, baseClient);
