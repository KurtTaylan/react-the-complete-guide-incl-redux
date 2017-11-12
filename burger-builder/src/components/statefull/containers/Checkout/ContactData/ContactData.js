import React, {Component} from 'react';

import styledClasses from './ContactData.css'
import baseClient from '../../../../../client-base'
import Button from "../../../../stateless/UI/Button/Button";
import Spinner from "../../../../stateless/UI/Spinner/Spinner";
import Aux from "../../../../stateless/hoc/Aux/Aux";

class ContactData extends Component {
    state = {
        name: null,
        surname: null,
        email: null,
        deliveryMethod: null,
        address: {
            city: null,
            country: null
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

    render() {
        let form = (
            <Aux>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={styledClasses.Input} type="text" name="name" placeholder="Taylan"/>
                    <input className={styledClasses.Input} type="text" name="surname" placeholder="Kurt"/>
                    <input className={styledClasses.Input} type="text" name="email"
                           placeholder="taylankurt34@gmail.com"/>
                    <input className={styledClasses.Input} type="text" name="city" placeholder="Istanbul"/>
                    <input className={styledClasses.Input} type="text" name="country" placeholder="Turkey"/>
                    <input className={styledClasses.Input} type="text" name="deliveryMethod" placeholder="UPS"/>
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
