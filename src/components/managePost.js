import React, { Component } from 'react';
import allPost from './allPost';
import PostBox from './Post';


import { Config } from './config';
import 'firebase/database';

class managePost extends Component {
    constructor() {
        super();
        this.state = {
            post: []
        };
        this.addPost = this.addPost.bind(this);
        this.removePost = this.removePost.bind(this);

        // this.app = firebase.initializeApp(db_conf);
        this.db = Config.database().ref().child('post');

    }

    componentDidMount () {
        const { post} = this.state;
        this.db.on('child_added', snap => {
            post.push({
                postId: snap.key,
                postContent: snap.val().postContent
            });
            this.setState({post});
        });

        this.db.on('child_removed', snap => {
            for(let i = 0; i<post.length; i++) {
                if(post[i].postId === snap.key) {
                    post.splice(i,1);
                }
            }
            console.log(post);
            this.setState({post});
        });
    }

    addPost(post) {
        this.db.push().set({postContent: post});
    }

    removePost (postId) {
        this.db.child(postId).remove()
    };

    render() {
		return (
            <div>
                <section>
                    <PostBox  addPost= {this.addPost}/>
                </section>
                <div className="postBody">
					{
						this.state.post.map(onePost => {
							return (
								<allPost
									postContent={onePost.noteContent} 
									postId={onePost.noteId}
									key={onePost.noteId}
									removePost={this.removePost}
								/>);
						})
					}
					
				</div>
            </div>
		);
	}
}

export default managePost;
