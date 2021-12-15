import { userProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 2 },
    { id: 2, message: "Hi, how old are you", likesCount: 4 },
    { id: 3, message: "Andy", likesCount: 6 },
  ],
  newPostText: "lena",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = state.newPostText;

      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          {
            id: 4,
            message: newPost,
            likesCount: 0,
          },
        ],
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const upDateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
  userProfileAPI.userProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      });
}

export default profileReducer;
