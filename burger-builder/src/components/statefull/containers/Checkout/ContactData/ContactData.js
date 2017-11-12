import React, {Component} from 'react';
import styledClasses from './ContactData.css'
import PropTypes from 'prop-types';
import Button from "../../../../stateless/UI/Button/Button";

class ContactData extends Component {
    state = {
        name: null,
        surname: null,
        email: null,
        address: {
            street: null,
            postalCode: null
        }
    }

    render() {
        return (
            <div className={styledClasses.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={styledClasses.Input} type="text" name="name" placeHolder="Taylan"/>
                    <input className={styledClasses.Input} type="text" name="surname" placeHolder="Kurt"/>
                    <input className={styledClasses.Input} type="text" name="email" placeHolder="taylankurt34@gmail.com"/>
                    <input className={styledClasses.Input} type="text" name="street" placeHolder="Street"/>
                    <input className={styledClasses.Input} type="text" name="postalCode" placeHolder="34034"/>
                    <Button buttonType="Success" clicked>ORDER</Button>
                </form>
            </div>
        );
    }
}

ContactData.propTypes = {};

export default ContactData;
