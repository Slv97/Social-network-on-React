import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div>
      my post
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
