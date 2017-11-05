import React, {Component} from 'react';
import './App.css';
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
    state = {
        userInput: '',
        userInputLength: '0'
    };

    render() {
        let charArray = null;
        if (this.state.userInput) {
            const userInput = [...this.state.userInput];
            charArray = userInput;
        } else {
            charArray = [];
        }

        const charComponentList = (
            <div>
                {charArray.map((chr, index) => {
                    return <CharComponent
                        text={chr}
                        click={() => this.deleteCharHandler(index)}
                    />
                })}
            </div>
        );


        return (
            <div className="App">
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={(event) => this.writeUserInput(event)}
                />
                <p>{this.state.userInputLength}</p>
                <ValidationComponent length={this.state.userInputLength}/>
                {charComponentList}
            </div>
        );
    }

    writeUserInput = (event) => {
        this.setState({
            userInput: event.target.value,
            userInputLength: event.target.value.length
        });
    };

    deleteCharHandler = (index) => {
        const userInput = [...this.state.userInput];
        userInput.splice(index, 1);
        let s = userInput.join('');
        this.setState((prevState, props) => ({
            userInput: s,
            userInputLength: prevState.userInputLength - 1
        }));
    }
}

export default App;
