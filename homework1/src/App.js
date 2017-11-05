import React, {Component} from 'react';
import './App.css';
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {
    state = {
        username: 'Taylan'
    };

    render() {
        return (
            <div className="App">
                <h1>HOMEWORK 1</h1>
                <UserInput username={this.state.username} changed={this.usernameChangedHandler}/>
                <UserOutput username={this.state.username}/>
                <UserOutput/>
            </div>
        );
    }

    usernameChangedHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    };

}

export default App;
