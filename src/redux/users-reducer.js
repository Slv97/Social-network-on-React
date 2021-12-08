const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

let initialState = {
  usersData: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3
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
        return { ...state, usersData: action.users }
      }

      case SET_CURRENT_PAGE: {
        return { ...state, currentPage: action.currentPage }
      }

      case SET_TOTAL_USER_COUNT: {
        return { ...state, totalUsersCount: action.totalUsersCount }
      }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })

export default usersReducer;
