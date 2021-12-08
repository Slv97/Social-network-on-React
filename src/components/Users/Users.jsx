import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/smile.svg";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.usersData.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }    
  }

  onPageChanged = (el) => {
    this.props.setCurrentPage(el)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
      }) //el это  pageNumber 
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((el, i) => {
            return <span key={i} className={ this.props.currentPage === el ? s.selectedPage : s.page } onClick={() => { this.onPageChanged(el) }}>{el}</span>;
          })}
        </div>
        {this.props.usersData.map((el) => {
          return (
            <div key={el.id}>
              <span>
                <div>
                  <img
                    src={el.photos.small != null ? el.photos.small : userPhoto}
                    alt="ava"
                    className={s.users_photo}
                  />
                </div>
                <div>
                  {el.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(el.id);
                      }}
                    >
                      unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(el.id);
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
  }
}

export default Users;
