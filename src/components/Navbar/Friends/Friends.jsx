import s from "./Friends.module.css";

const Friends = (props) => {
  let friend = props.friendsData.map((el, i) => {
    return (
      <div key={i}>
        <img alt="avatar" src={el.img} className={s.avatar} />
        <div>{el.name}</div>
      </div>
    );
  });

  return (
    <div>
      <h3 className={s.header}>Friends</h3>

      <div className={s.wrapper}> { friend } </div>
    </div>
  );
};

export default Friends;
