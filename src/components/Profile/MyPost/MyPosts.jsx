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
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch( action )
  }
  
  return (
    <div>
      my post
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
