import MyPosts from "./MyPost/MyPosts";
// import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={props.postData}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default Profile;
