import React, {Component} from 'react';

import styledClasses from './ContactData.css'
import baseClient from '../../../../../client-base'
import Button from "../../../../stateless/dummy/UI/Button/Button";
import Spinner from "../../../../stateless/dummy/UI/Spinner/Spinner";
import Aux from "../../../../stateless/hoc/Aux/Aux";
import Input from "../../../../stateless/dummy/UI/Input/Input";

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
                valid: false
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
                valid: false
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
                valid: false
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
                valid: false
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
                valid: false
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
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        let formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            orderData: formData
        };
        baseClient.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                    purchasing: false
                });
                this.props.history.replace('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false,
                    purchasing: false
                });
            });
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    };

    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedOrderFormElement = {...updatedOrderForm[inputId]};
        updatedOrderFormElement.value = event.target.value;
        updatedOrderFormElement.valid = this.checkValidity(updatedOrderFormElement.value, updatedOrderFormElement.validation)
        updatedOrderForm[inputId] = updatedOrderFormElement;
        console.log(updatedOrderFormElement);
        this.setState({orderForm: updatedOrderForm});
    }

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
                            shouldValidate={formElement.config.validation}
                            invalid={!formElement.config.valid}/>
                    })}
                    <Button buttonType="Success">ORDER</Button>
                </form>
            </Aux>
        );

        if (this.state.loading) {
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

export default ContactData;
