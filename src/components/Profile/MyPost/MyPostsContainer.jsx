import React from "react";
import {
  addPostActionCreator,
  upDateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(upDateNewPostActionCreator(text));
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <MyPosts
          addPost={addPost}
          upDateNewPostText={onPostChange}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText}
        />
      )}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
