const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  usersData: [
    // {
    //   id: 1,
    //   photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
    //   followed: false,
    //   fullName: "Lena",
    //   status: "Learn react",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
    //   followed: true,
    //   fullName: "Leha",
    //   status: "Learn C++",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 3,
    //   photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
    //   followed: false,
    //   fullName: "Ilua",
    //   status: "Learn english",
    //   location: { city: "Stolin", country: "Belarus" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch ((action.type)) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };


      case SET_USERS: {
        return { ...state, usersData: [ ...state.usersData, ...action.users ] }
      }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
