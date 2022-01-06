import { authUserProfileAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authUserProfileAPI.authUserProfile();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let responce = await authUserProfileAPI.login(email, password, rememberMe)
    if (responce.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
    // } else {
    //   let message = responce.data.message.length  > 0 ? responce.data.message[0] : "Some error"
    //   dispatch(stopSubmit("login", {_error: message}))
    // }

  
};

export const logout = () => async (dispatch) => {
  let responce = await authUserProfileAPI.logout()
    if (responce.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
