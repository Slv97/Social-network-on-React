import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postData.map((el, i) => {
    return (
      <Post
        key={i}
        message={el.message}
        likesCount={el.likesCount}
        id={el.id}
      />
    );
  });

  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
