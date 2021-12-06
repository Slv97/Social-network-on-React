import React from "react";
import {
  addPostActionCreator,
  upDateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = upDateNewPostActionCreator(text)
          store.dispatch(action);
        };

        return (
          <MyPosts
            addPost={addPost}
            upDateNewPostText={onPostChange}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
