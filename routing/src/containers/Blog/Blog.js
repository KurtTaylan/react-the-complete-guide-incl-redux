import React, {Component} from 'react';
import {Route} from 'react-router-dom';
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">NewPost</a></li>
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