import React, { Component } from 'react';
import AllPost from './allPost';
import PostBox from './Post';


import { Config } from './config';
import 'firebase/database';

class ManagePost extends Component {
    constructor(props) {
        super(props);
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
                <p>Comparte aquí tus ideas y sentimientos</p>
                <section>
                    <PostBox  addPost= {this.addPost}/>
                </section>
                <div className="postBody">
					{
						this.state.post.map(onePost => {
							return (
								<AllPost
									postContent={onePost.postContent} 
									postId={onePost.postId}
									key={onePost.postId}
									removePost={this.removePost}
								/>);
						})
					}
					
				</div>
            </div>
		);
	}
}

export default ManagePost;
