import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.my_image}
          src="https://klike.net/uploads/posts/2020-02/1581238406_2.jpg"
          alt="img"
        />
      </div>

      <div className={s.profile}>
        <img src={props.profile.photos.large} alt="largePhoto" />

        <div className={s.description}>
          <h2>{props.profile.fullName}</h2>
          <h3>Contacts</h3>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
