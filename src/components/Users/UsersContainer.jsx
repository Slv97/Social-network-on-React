import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

import * as axios from "axios";
// import userPhoto from "../../assets/images/smile.svg";
import React from "react";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
      if (this.props.usersData.length === 0) {
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
          )
          .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
          });
      }
    }
  
    onPageChanged = (el) => {
      this.props.setCurrentPage(el);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
        }); //el это  pageNumber
    };
  
    render() {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          usersData={this.props.usersData}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      );
    }
  }
  

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent); 