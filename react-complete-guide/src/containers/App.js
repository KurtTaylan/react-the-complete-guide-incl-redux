import React, {Component} from 'react';
import styleClasses from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Taylan', age: 24},
            {id: '2', name: 'Yesim', age: 23},
            {id: '3', name: 'John', age: 21}
        ],
        showPersons: false
    };

    render() {
        let conditionalPersons = null;
        if (this.state.showPersons) {
            conditionalPersons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <div className={styleClasses.App}>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    toggleHandler={this.togglePersonsHandler}
                />
                {conditionalPersons}
            </div>
        );
    }

    togglePersonsHandler = () => {
        console.log('Was clicked!');
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };
}

export default App;
