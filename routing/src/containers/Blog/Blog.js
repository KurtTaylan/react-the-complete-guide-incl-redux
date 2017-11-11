import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './Blog.css';
import Posts from "./Posts/Posts";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">NewPost</a></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" component={Posts}/>
            </div>
        );
    }
}

export default Blog;