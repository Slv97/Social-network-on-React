const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
  usersData: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3,
  isFetching: false
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

      case TOGGLE_IS_FETCHING: {
        return { ...state, isFetching: action.isFetching}
      }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;
