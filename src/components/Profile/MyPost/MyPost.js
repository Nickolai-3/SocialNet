import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';


const MyPost = (props) => {


  let PostElements = props.posts.map(p => <Post message={p.message} likecount={p.likecount} id={p.id} />)

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
        </div>


      </div>
    </div>

  )
}
export default MyPost;