import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = () => {
  return (
    <div className={s.item}>MyPost
                  <div>
        <textarea></textarea>
        <button>Add Post</button>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

      </div>
    </div>

  )
}
export default MyPost;