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
  let PostData = [
    {message: "hello, How are you?",   likecount: <Like/>, id: 77},
    {message: "Hi, I am fine", likecount:<Like/>, id: 21}
  ]
  let PostElements= PostData.map(pd=><Post message={pd.message} likecount={pd.likecount} id={pd.id}/>)

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
          {PostElements}
        
        {/* <Post message={PostData[0].message}/>          <Like id={LikeData[0].id} />

        <Post message={PostData[1].message}/>          <Like id={LikeData[1].id} /> */}

          {/* <Post message="hello, How are you?"  /> */}

          {/* <Post message="Hi, I am fine" /> */}
        </div>


      </div>
    </div>

  )
}
export default MyPost;