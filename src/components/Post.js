import React, { Component } from 'react';

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.saveText = this.saveText.bind(this);
  }

  handleInput(e) {
    this.setState({
      newPost: e.target.value,
    });
  }

  saveText() {
    this.props.saveText(this.state.newPost);
    this.setState({
      newPost: ''
    });
    this.textInput.focus();
  }

  componentDidMount() {
    // Cada que se sendereiza el componente, esto sucede
    this.textInput.focus();
  }

  render() {
    return (
      <div className="PostForm">
            <input
            placeholder="Comparte tus experiencias"
            className="postInput"
            ref= {(input) => { this.textInput = input; }}
            value= {this.state.newPost}
            onChange={this.handleInput}
            type= "text"
            />
            <button onClick={this.saveText} className="postButton">Publicar</button>
          </div>
    );
  }
}
export default PostBox;