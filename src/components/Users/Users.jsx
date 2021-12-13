import s from "./Users.module.css";
import userPhoto from "../../assets/images/smile.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { followAPI, unfollowAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((el, i) => {
          return (
            <span
              key={i}
              className={props.currentPage === el ? s.selectedPage : s.page}
              onClick={() => {
                props.onPageChanged(el);
              }}
            >
              {el}
            </span>
          );
        })}
      </div>
      {props.usersData.map((el) => {
        return (
          <div key={el.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + el.id}>
                  <img
                    src={el.photos.small != null ? el.photos.small : userPhoto}
                    alt="ava"
                    className={s.users_photo}
                  />
                </NavLink>
              </div>
              <div>
                {el.followed ? (
                  <button
                    onClick={() => {
                      unfollowAPI.unfollow(el.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.unfollow(el.id);
                        }
                      });
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      followAPI.follow(el.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(el.id);
                        }
                      });
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{el.name}</div>
                <div>{el.status}</div>
              </span>
              <span>
                <div>{"el.location.country"}</div>
                <div>{"el.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
