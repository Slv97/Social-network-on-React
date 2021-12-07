import s from "./Users.module.css";
import * as axios from "axios"
import userPhoto from '../../assets/images/smile.svg'

const Users = (props) => {
    if (props.usersData.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })

        
    }
  

  return (
    <div>
      {props.usersData.map((el) => {
        return (
          <div key={el.id}>
            <span>
              <div>
                <img src={el.photos.small !=null ? el.photos.small : userPhoto} alt="ava" className={s.users_photo} />
              </div>
              <div>
                {el.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(el.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(el.id);
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
