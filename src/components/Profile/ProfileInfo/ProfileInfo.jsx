import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.my_image}
          src="https://klike.net/uploads/posts/2020-02/1581238406_2.jpg"
        />
      </div>

      <div>ava + disc</div>
    </div>
  );
};

export default ProfileInfo;
