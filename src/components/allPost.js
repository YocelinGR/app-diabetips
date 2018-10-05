import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AllPost extends Component {
    constructor(props) {
        super(props);
        this.postContent = props.postContent;
        this.postId = props.postId;
        this.handleRemovePost = this.handleRemovePost.bind(this);
    }

    handleRemovePost(id) {
        this.props.removePost(id);
    }

    render(props) {
        return (
            <div className= "allPost">
                <button className = "delete-btn" onClick = {() => this.handleRemovePost(this.postId)}>x</button>
                <p>{this.postContent}</p>
            </div>
        )
    }
}

/*allPost.PropTypes  = {
    postContent: PropTypes.String
};*/

export default AllPost;