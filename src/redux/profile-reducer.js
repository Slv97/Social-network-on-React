import { userProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 2 },
    { id: 2, message: "Hi, how old are you", likesCount: 4 },
    { id: 3, message: "Andy", likesCount: 6 },
  ],
  newPostText: "lena",
  profile: null,
  status: ""
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

    case SET_STATUS: {
      return { ...state, status: action.status }
    }

    case DELETE_POST: {
      return {...state, postData: state.postData.filter(p => p.id !== action.postId)};
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

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => (dispatch) => {
  userProfileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  userProfileAPI.updateStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}

export const deletePost = (postId) => ({DELETE_POST, postId})

export default profileReducer;
