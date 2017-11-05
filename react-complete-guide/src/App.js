import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Taylan', age: 24},
            {name: 'Yesim', age: 23}
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I am Taylan</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            </div>
        );
    }

    switchNameHandler = () => {
        console.log('Was clicked!');
        this.setState({
            persons: [
                {name: 'Taylanos', age: 24},
                {name: 'Yesim', age: 23}
            ]
        });
    };

}

export default App;
