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
                value: ''
            },
            surname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'surname'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'email'
                },
                value: ''
            },

            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'city'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
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
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                name: 'Taylan',
                surname: 'Kurt',
                email: 'taylankurt34@gmail.com',
                deliveryMethod: 'UPS',
                address: {
                    city: 'İstanbul',
                    country: 'Turkey'
                },
                currency: 'TRY'
            }
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

    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        let updatedOrderFormElement = {...updatedOrderForm[inputId]};
        updatedOrderFormElement.value = event.target.value;
        updatedOrderForm[inputId] = updatedOrderFormElement;
        this.setState({
           orderForm: updatedOrderForm
        });
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
                <form>
                    {formElementArray.map(formElement => {
                        return <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    })}
                    <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
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
