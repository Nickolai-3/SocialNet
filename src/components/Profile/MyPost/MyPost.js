import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import Like from './Post/Like';


const MyPost = (props) => {
debugger;
  return (
    <div className={s.item}>MyPost
                  <div>
        <textarea></textarea>
        <button>Add Post</button>
        <Post message="hello, How are you?" />
        <Like value ="49"/>

        <Post message="Hi, I am fine" />
        <Like value ="77"/>

        
      </div>
    </div>

  )
}
export default MyPost;