const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 2 },
    { id: 2, message: "Hi, how old are you", likesCount: 4 },
    { id: 3, message: "Andy", likesCount: 6 },
  ],
  newPostText: "lena",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
        return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const upDateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;
