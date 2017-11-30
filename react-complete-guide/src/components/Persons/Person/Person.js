import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styledClasses from './Person.css';
import withClassDiv from '../../../hoc/withClassDiv';
import Aux from "../../../hoc/PlaceHolder";


class Person extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  
  render() {
    return (
      <Aux>
        <p onClick={this.props.clicked}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(input) => {
            this.inputElement = input
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
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