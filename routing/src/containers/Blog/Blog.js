import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

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
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;