import s from './Post.module.css'

const Post = (props) => {
    return (          
        <div className={s.item}>
          <img src="https://cdnn11.img.sputnik.by/img/102786/75/1027867565_311:0:2173:2048_1920x0_80_0_0_3d857ab1fd3c54b84916f24a14abd053.jpg" alt="avatar"/>

          { props.message }

          <div>
          <button>like</button><span>{ props.likesCount }</span>
          </div>
          
        </div>
    )
}

export default Post;