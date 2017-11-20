import React, {Component} from 'react';
import Input from "../../../stateless/dummy/UI/Input/Input";
import Button from "../../../stateless/dummy/UI/Button/Button";
import {checkValidity} from "../../util";
import * as styledClasses from './Auth.css';
import * as actions from '../../../../store/action'
import withErrorHandler from "../../../stateless/hoc/withErrorHandler/withErrorHandler";
import {connect} from "react-redux";
import * as go from "../../../../client";
import Spinner from "../../../stateless/dummy/UI/Spinner/Spinner";

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                errorMessage: ''
            }
        },
        isSignIn: false
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignIn);
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignIn: !prevState.isSignIn
            }
        });
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        if (this.props.loading) {
            form = <Spinner/>;
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div className={styledClasses.Auth}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button buttonType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    buttonType="Danger">
                    Switch to {this.state.isSignIn ? 'Sign Up' : 'Sign In'}
                </Button>
            </div>
        );
    }
}

Auth.propTypes = {};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    }
};

const mapsDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    }
};

export default connect(mapStateToProps, mapsDispatchToProps)(withErrorHandler(Auth, go.baseAPI));
