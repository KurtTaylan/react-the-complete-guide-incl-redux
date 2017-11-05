import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Taylan', age: 24},
            {name: 'Yesim', age: 23}
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


        return (
            <div className="App">
                <h1>Hi, I am Taylan</h1>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Switch Name
                </button>
                {
                    this.state.showPersons ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}/>

                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Efficient, Taylan paragraph click')}
                                changed={this.nameChangedHandler}>My Hobbies:
                                Racing </Person>
                        </div>
                        :
                        null
                }
            </div>
        );
    }


    togglePersonsHandler = () => {
        console.log('Was clicked!');
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    switchNameHandler = (newName) => {
        console.log('Was clicked!');
        this.setState({
            persons: [
                {name: newName, age: 24},
                {name: 'Yesim', age: 23}
            ]
        });
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
