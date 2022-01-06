import s from "./Users.module.css";
import userPhoto from "../../assets/images/smile.svg";
import React from "react";
import { NavLink } from "react-router-dom";

const User = (user, followingInProgress, unfollow, follow) => {
  let el = user;
  return (
    <div>
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
              className={s.button}
              disabled={followingInProgress.some((id) => id === el.id)}
              onClick={() => {
                unfollow(el.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              className={s.button}
              disabled={followingInProgress.some((id) => id === el.id)}
              onClick={() => {
                follow(el.id);
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
};

export default User;
