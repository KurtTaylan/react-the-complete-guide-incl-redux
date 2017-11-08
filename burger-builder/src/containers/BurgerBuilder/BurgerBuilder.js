import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger Graphical representation</div>
                <div>Build Control</div>
            </Aux>
        );
    }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
