import s from "./Users.module.css";

const Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
              id: 1,
              photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
              followed: false,
              fullName: "Lena",
              status: "Learn react",
              location: { city: "Minsk", country: "Belarus" },
            },
            {
              id: 2,
              photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
              followed: true,
              fullName: "Leha",
              status: "Learn C++",
              location: { city: "Minsk", country: "Belarus" },
            },
            {
              id: 3,
              photo: "http://simpleicon.com/wp-content/uploads/smile.svg",
              followed: false,
              fullName: "Ilua",
              status: "Learn english",
              location: { city: "Stolin", country: "Belarus" },
            },
          ]);
    }
  

  return (
    <div>
      {props.usersData.map((el) => {
        return (
          <div key={el.id}>
            <span>
              <div>
                <img src={el.photo} alt="ava" className={s.users_photo} />
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
                <div>{el.fullName}</div>
                <div>{el.status}</div>
              </span>
              <span>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
