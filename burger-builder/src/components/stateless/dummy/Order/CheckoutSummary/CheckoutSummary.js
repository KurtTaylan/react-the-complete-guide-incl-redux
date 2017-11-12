import React from 'react';
import styledClasses from './CheckoutSummary.css';
import Burger from "../../Burger/Burger";
import Button from "../../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div className={styledClasses.CheckoutSummary}>
            <h1>We hope it taste well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.cancel} buttonType="Danger">CANCEL</Button>
            <Button clicked={props.buy} buttonType="Success">BUY</Button>
        </div>
    );
};

export default checkoutSummary;
