import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Taylan', age: 24},
            {id: '2', name: 'Yesim', age: 23}
        ],
        showPersons: false
    };

    render() {
        const style = {
            backgroundColor: 'white',
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
                            age={person.age}/>
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I am Taylan</h1>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Switch Name
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Taylan', age: 24},
                {name: event.target.value, age: 23}
            ]
        });
    };

}

export default App;
