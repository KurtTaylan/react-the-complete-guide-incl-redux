import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>NewPost</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;