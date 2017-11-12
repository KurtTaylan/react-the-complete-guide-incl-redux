import React, {Component} from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import NoMatch from "./components/NoMatch/NoMatch";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/courses"
                                activeClassName="active">Courses</NavLink>
                            </li>
                            <li><NavLink
                                exact
                                to="/users"
                                activeClassName="active">Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route path="/courses" component={Courses}/>
                    <Redirect from="/all-courses" to="/courses"/>
                    <Redirect exact from="/" to="/courses"/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default App;
