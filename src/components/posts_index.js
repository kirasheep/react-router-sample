import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index.js';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostsIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        //posts is a object but not a map, so we can't use posts.map to render, but instead using _.map function
        return _.map(this.props.posts, post =>{
            return (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            );
        });
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                    Add a post
                </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    };
}

function mapStateToProps(state){
    return {posts:state.posts};
}

//to save the call of bindactioncreators
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);