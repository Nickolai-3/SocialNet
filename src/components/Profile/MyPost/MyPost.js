import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {
debugger;
  return (
    <div className={s.item}>MyPost
                  <div>
        <textarea></textarea>
        <button>Add Post</button>
        <Post message="hello, How are you?" />
        <Post message="Hi, I am fine" />
        
      </div>
    </div>

  )
}
export default MyPost;