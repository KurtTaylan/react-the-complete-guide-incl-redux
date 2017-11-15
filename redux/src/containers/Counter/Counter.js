import React, {Component} from 'react';
import * as actionTypes from '../../store/action';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                })
                break;
            case 'dec':
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1}
                })
                break;
            case 'add':
                this.setState((prevState) => {
                    return {counter: prevState.counter + value}
                })
                break;
            case 'sub':
                this.setState((prevState) => {
                    return {counter: prevState.counter - value}
                })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT,
            value: 1
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT,
            value: 1
        }),
        onAddCounter: () => dispatch({
            type: actionTypes.ADD,
            value: 5
        }),
        onSubstractCounter: () => dispatch({
            type: actionTypes.SUBTRACT,
            value: 5
        }),
        onStoreResult: (result) => dispatch({
            type: actionTypes.STORE_RESULT,
            result: result
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            id: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);