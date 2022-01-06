// import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  follow,
  unfollow,
  followingInProgress,
  ...props
) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {props.usersData.map((el) => (
        <User
          user={el}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default Users;
