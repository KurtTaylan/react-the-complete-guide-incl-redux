import React, {Component} from 'react';

import styledClasses from './ContactData.css'
import * as go from '../../../../../client'
import Button from "../../../../stateless/dummy/UI/Button/Button";
import Spinner from "../../../../stateless/dummy/UI/Spinner/Spinner";
import Aux from "../../../../stateless/hoc/PlaceHolder/PlaceHolder";
import Input from "../../../../stateless/dummy/UI/Input/Input";
import {connect} from "react-redux";
import withErrorHandler from "../../../../stateless/hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../../../store/action";
import {checkValidity} from "../../../util";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'surname'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },

            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'city'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 15
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'ups', displayValue: 'UPS'},
                        {value: 'mng', displayValue: 'MNG'},
                        {value: 'yurtici', displayValue: 'Yurtici'}
                    ]
                },
                value: 'yurtici',
                touched: false
            },
        },
        isFormValid: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        let formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            orderData: formData
        };
        this.props.onOrderBurger(order, this.props.token);
    };

    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedOrderFormElement = {...updatedOrderForm[inputId]};
        updatedOrderFormElement.value = event.target.value;

        let validity = checkValidity(updatedOrderFormElement.value, updatedOrderFormElement.validation);
        updatedOrderFormElement.valid = validity.isValid;
        updatedOrderFormElement.errorMessage = validity.errorMessage;
        updatedOrderFormElement.touched = true;
        updatedOrderForm[inputId] = updatedOrderFormElement;

        let isFormValid = true;
        for (let inputId in updatedOrderForm) {
            if (updatedOrderForm[inputId].validation) {
                isFormValid = updatedOrderForm[inputId].valid && isFormValid;
            }
        }

        this.setState({
            orderForm: updatedOrderForm,
            isFormValid: isFormValid
        });
    };

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <Aux>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={this.orderHandler}>
                    {formElementArray.map(formElement => {
                        return <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            touched={formElement.config.touched}
                            shouldValidate={formElement.config.validation}
                            invalid={!formElement.config.valid}
                            errorMessage={formElement.config.errorMessage}/>
                    })}
                    <Button buttonType="Success" disabled={!this.state.isFormValid}>ORDER</Button>
                </form>
            </Aux>
        );

        if (this.props.loading) {
            form = <Spinner/>;
        }

        return (
            <div className={styledClasses.ContactData}>
                {form}
            </div>
        );
    }
}

ContactData.propTypes = {};

const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, go.baseAPI));
