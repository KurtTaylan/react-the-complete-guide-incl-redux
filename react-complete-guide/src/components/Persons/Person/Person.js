import React, {Component} from 'react';
import styledClasses from './Person.css'


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
        return (
            <div className={styledClasses.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;