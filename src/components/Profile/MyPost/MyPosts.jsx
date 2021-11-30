import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postData = [
    {id: 1, message: "Hi, how are you?", likesCount: 2},
    {id: 2, message: "Hi, how old are you", likesCount: 4},
    {id: 3, message: "Andy", likesCount: 6}
];

let postElements = postData.map((message, likesCount, id) => {
  return <Post message={postData[0].message} likesCount={postData[0].likesCount} id={postData[0].id} />
})

console.log(postElements);

    return (
        <div >
          my post 
          <div>
            <textarea></textarea>
            <button>Add Post</button>
          </div>
          
          <div className={s.posts}>
            {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} id={postData[0].id} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} id={postData[1].id} /> */}
            {postElements}
          </div>
        </div>
    )
}

export default MyPosts;