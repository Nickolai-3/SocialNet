import React from 'react';
import s from './Post.module.css';
import Like from './Like';


const Post = (props) => {

  return (

    <div>Post

        <div >

        <img className={s.item_img} src='https://fakty.com.ua/wp-content/uploads/2019/03/14/Bez-nazvanyya-1-e1552570144483.png' />
        {props.message}
        {props.likecount}
        {props.id}
       



      </div>


    </div>

  )
}
export default Post;