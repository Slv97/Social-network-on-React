import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  console.log("render yo")
  let postElement = props.postData.map((el, i) => {
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
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.upDateNewPostText(text);
  }

  return (
    <div>
      my post
      <div>
        <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
        <button onClick={ onAddPost }>Add Post</button>
      </div>
      <div className={ s.posts }>{ postElement }</div>
    </div>
  );
});

export default MyPosts;