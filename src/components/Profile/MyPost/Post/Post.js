import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  
  return (

    <div>Post

        <div className={s.item}>

        <img src='https://fakty.com.ua/wp-content/uploads/2019/03/14/Bez-nazvanyya-1-e1552570144483.png'></img>
        {props.message}

        <div><span>Like</span></div>

      </div>


    </div>

  )
}
export default Post;