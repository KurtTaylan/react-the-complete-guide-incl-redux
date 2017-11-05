import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let conditionalPersons = null;
        if (this.state.showPersons) {
            conditionalPersons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes will be red
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes will be red
        }

        return (
            <div className="App">
                <h1>Hi, React Application</h1>
                <p className={classes.join(' ')}> To enable person list please toggle the button</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Person
                </button>
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
