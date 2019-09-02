import React from 'react';
import Post from './Post/Post';
import Like from './Post/Like';
import s from './MyPost.module.css';


const MyPost = (props) => {
  let LikeData = [
    {id:"77"},
    {id:"24"},
    {id:"12"}
  ]
  
  return (
    <div className={s.content}> <h2>MyPost</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <div className={s.marg}>
          <Post message="hello, How are you?"  />
          <Like id={LikeData[0].id} />

          <Post message="Hi, I am fine" />
          <Like id={LikeData[1].id} />
        </div>


      </div>
    </div>

  )
}
export default MyPost;