import MyPosts from './MyPost/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 2 },
    { id: 2, message: "Hi, how old are you", likesCount: 4 },
    { id: 3, message: "Andy", likesCount: 6 },
  ];

    return (
      <div>
        <ProfileInfo />
        
        <MyPosts postData={postData}/>
      </div>
    )
}

export default Profile;