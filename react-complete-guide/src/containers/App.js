import React, {PureComponent} from 'react';
import styleClasses from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClassDiv from "../hoc/WithClassDiv";

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('inside App constructor', props);
        this.state = {
            persons: [
                {id: '1', name: 'Taylan', age: 24},
                {id: '2', name: 'Yesim', age: 23},
                {id: '3', name: 'John', age: 21}
            ],
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('inside App componentWillMount');
    }

    componentDidMount() {
        console.log('inside App componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE]inside App componentWillReceiveProps', nextProps);
    }

    /* shouldComponentUpdate(nextProps, nextState) {
         console.log('[UPDATE]inside App shouldComponentUpdate', nextProps);
         return nextState.persons !== this.state.persons ||
             nextState.showPersons !== this.state.showPersons;
     }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE]inside App componentWillUpdate', nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[UPDATE]inside App componentDidUpdate', prevProps);
    }


    render() {
        console.log('inside App render method');
        let conditionalPersons = null;
        if (this.state.showPersons) {
            conditionalPersons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <WithClassDiv classes={styleClasses.App}>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Show Persons
                </button>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    toggleHandler={this.togglePersonsHandler}
                />
                {conditionalPersons}
            </WithClassDiv>
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
