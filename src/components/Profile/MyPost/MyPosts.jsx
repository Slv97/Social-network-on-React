import React, {PureComponent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
console.log("render")

class MyPosts extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      this.setState({a: 12})
    }, 3000)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  render() {
    console.log("render yo")

    let postElement = this.props.postData.map((el, i) => {
      return (
        <Post
          key={i}
          message={el.message}
          likesCount={el.likesCount}
          id={el.id}
        />
      );
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
      this.props.addPost();
    };

    let onPostChange = () => {
      let text = newPostElement.current.value;
      this.props.upDateNewPostText(text);
    };

    return (
      <div>
        my post
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={this.props.newPostText}
          />
          <button onClick={onAddPost}>Add Post</button>
        </div>
        <div className={s.posts}>{postElement}</div>
      </div>
    );
  }
}

export default MyPosts;
