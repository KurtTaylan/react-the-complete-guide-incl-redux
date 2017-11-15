import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actionTypes from '../store/action';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded}/>
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeleteAdded(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.person.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({
            type: actionTypes.ADD_PERSON,
            newPerson: {
                id: Math.random(), // not really unique but good enough here!
                name: 'Taylan',
                age: Math.floor(Math.random() * 24 )
            }
        }),
        onDeleteAdded: (id) => dispatch({
            type: actionTypes.DELETE_PERSON,
            id: id
        })


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);