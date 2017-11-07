import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styledClasses from './Person.css';
import withClassDiv from '../../../hoc/withClassDiv';
import Aux from "../../../hoc/Aux";


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('inside Person constructor', props);
    }

    componentWillMount() {
        console.log('inside Person componentWillMount');
    }

    componentDidMount() {
        console.log('inside Person componentDidMount');
    }

    render() {
        console.log('inside Person render');
        /*return (
            <div className={styledClasses.Person}>
                <p onClick={this.props.clicked}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );*/
        return (
            <Aux>
                <p onClick={this.props.clicked}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClassDiv(Person, styledClasses.Person);